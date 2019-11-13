<template>
	<div class="cols-component" :style="style" :class="klass" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
const breakPoints = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"rh",
	"fh",
	"qh",
	"kh"
];

const boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const boxStyle = ["size", "width", "height", "span", "area"];

function createTracks(vm) {
	let res = {};
	let fit = vm.fit !== undefined ? "auto-fit" : "auto-fill";

	for (const size of breakPoints) {
		if (vm[size]) {
			/** @type { String } */
			let value = "" + vm[size] + "";

			// number of columns
			if (value.match(/^\d+$/)) {
				value = `repeat(${value}, 1fr)`;
			} else if (!value.includes(" ")) {
				// repeat single size
				if (value.includes("/")) {
					// calcaulte size if there is an expression
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(100% * $1 / $2 - ${vm.gap || "0px"})`
					);
				}
				value = `repeat(${fit}, minmax(${value}, 1fr))`;
			} else {
				// multiple sizes specified
				let columnCount = value.split(" ").length;
				let gap = vm.gap || "0px";
				let fullSize = `calc(100% - ${gap} * ${columnCount - 1})`;
				if (value.includes("/")) {
					// just calculate math
					value = value.replace(
						/(\d+)\/(\d+)/g,
						`calc(${fullSize} * $1 / $2)`
					);
				}
			}
			res["--" + size] = value;
		}
	}

	res["grid-gap"] = vm.gap || "0px";
	return res;
}

function createClass(vm, prefix, flags) {
	let s = {};

	for (let key of flags) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function createStyles(vm) {
	let s = {};

	if (vm.size !== undefined) {
		s["flex-basis"] = vm.size;
	}
	if (vm.width !== undefined) {
		s["width"] = vm.width;
	}
	if (vm.height !== undefined) {
		s["height"] = vm.height;
	}
	if (vm.span) {
		s["grid-column"] = "span " + vm.span;
	}

	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	return s;
}

const props = [...boxStyle, ...boxClass, ...breakPoints, "gap", "fit"];

export default {
	props,
	computed: {
		style() {
			let res = Object.assign({}, createStyles(this), createTracks(this));
			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "cols-component", boxClass),
				createClass(this, "cols-component", breakPoints)
			);
			return s;
		}
	}
};
</script>

<style lang="scss">
$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
	xl 1100px 1068px, xxl 1332px 1300px, rh 1632px 1600px, fh 1832px 1800px,
	qh 2232px 2200px, kh 3032px 3000px !default;

.cols-component {
	display: grid;
	grid-auto-flow: column;

	@each $breakpoint in $breakpoints {
		$name: nth($breakpoint, 1);
		$size: nth($breakpoint, 2);
		$container: nth($breakpoint, 3);

		@media only screen and (min-width: $size) {
			&.cols-component--#{$name} {
				grid-template-columns: var(--#{$name});
				grid-auto-flow: row;
			}
		}
	}

	&.cols-component--grow {
		flex-grow: 1;
	}

	&.cols-component--shrink {
		flex-shrink: 1;
	}

	&.cols-component--expand {
		flex-grow: 9999;
	}

	&.cols-component--full {
		height: 100%;
	}

	&.cols-component--zero {
		flex-basis: 0px;
	}

	&.cols-component--scroll {
		overflow: auto;
		flex-basis: 0px;
	}
}
</style>