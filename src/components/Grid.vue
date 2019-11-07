<template>
	<div class="grid-component" :style="style" :class="klass" @click="$emit('click')">
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

const props = ["xs", "sm", "md", "lg", "xl", "xxl", "rh", "fh", "qh", "kh"];

const boxClass = ["grow", "expand", "full", "shrink", "zero", "scroll"];
const boxStyle = ["size", "width", "height", "span", "area"];

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
 if (vm.area){
        s["grid-area"] = vm.area;
    }
	return s;
}

export default {
	props: ["gap", ...props, ...boxClass, ...boxStyle],
	computed: {
		style() {
			let res = createStyles(this);

			for (const size of breakPoints) {
				if (this[size]) {
					let value = this[size];
					var parts = value.split("|");
					var rows = parts[0].split("/").map(x => `'${x.trim()}'`).join(" ");
					var cols = parts[1] || "";
					if (cols) {
						cols = "/" + cols;
					}
					res["--grid-component--" + size] = `${rows} ${cols}`;
				}
			}

			res["grid-gap"] = this.gap || "0rem";

			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "grid-component", boxClass),
				createClass(this, "grid-component", breakPoints)
			);
			return s;
		}
	}
};
</script>

<style lang="scss">
.grid-component {
	display: grid;

	$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
		xl 1100px 1068px, xxl 1332px 1300px, rh 1632px 1600px, fh 1832px 1800px,
		qh 2232px 2200px, kh 3032px 3000px !default;

	@each $breakpoint in $breakpoints {
		$name: nth($breakpoint, 1);
		$size: nth($breakpoint, 2);
		$container: nth($breakpoint, 3);

		@media only screen and (min-width: $size) {
			&.grid-component--#{$name} {
				grid: var(--grid-component--#{$name});
			}
		}
	}

	&.grid-component--zero {
		flex-basis: 0px;
	}

	&.grid-component--grow {
		flex-grow: 1;
	}

	&.grid-component--shrink {
		flex-shrink: 1;
	}

	&.grid-component--expand {
		flex-grow: 9999;
	}

	&.grid-component--zero {
		flex-basis: 0px;
	}

	&.grid-component--scroll {
		overflow: auto;
	}

	&.grid-component--full {
		height: 100%;
	}
}
</style>