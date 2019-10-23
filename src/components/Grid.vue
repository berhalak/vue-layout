<template>
	<div class="grid-component" :style="style" :class="klass">
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
const boxStyle = ["size", "width", "height", "span"];

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

	return s;
}

export default {
	props: ["gap", ...props, ...boxClass, ...boxStyle],
	computed: {
		style() {
			let res = createStyles(this);

			for (const size of props) {
				if (this[size]) {
					/** @type { String } */
					let value = "" + this[size] + "";

					if (value.match(/^\d+$/)) {
						value = `auto / repeat(auto-fill, minmax(calc(100% * 1 / ${value} - ${this
							.gap || "1rem"}), 1fr))`;
					} else if (value.match(/^\d+\/\d+$/)) {
						value = `auto / repeat(auto-fill, minmax(calc(100% * ${value} - ${this
							.gap || "1rem"}), 1fr))`;
					} else if (!value.includes("/") && !value.includes(" ")) {
						value = `auto / repeat(auto-fill, minmax(${value}, 1fr))`;
					}

					res["--" + size] = value;
				}
			}

			res["grid-gap"] = this.gap || "1rem";

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
				grid: var(--#{$name});
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