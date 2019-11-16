<template>
	<Masonry class="mas-component" :cols="mcols" :gutter="mgutter" :style="style" :class="klass">
		<slot />
	</Masonry>
</template>

<script>
import Masonry from "./Masonry";

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

const breaks = {
	xs: "0px",
	sm: "576px",
	md: "768px",
	lg: "992px",
	xl: "1100px",
	xxl: "1332px",
	rh: "1632px",
	fh: "1832px",
	qh: "2232px",
	kh: "3032px"
};

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
	if (vm.area) {
		s["grid-area"] = vm.area;
	}
	if (vm.gap) {
		s["--mas-gap"] = vm.gap;
	}
	return s;
}
const myClass = ["top"];
const props = [
	...boxStyle,
	...boxClass,
	...breakPoints,
	"gap",
	"fit",
	...myClass
];

export default {
	props,
	components: {
		Masonry
	},
	computed: {
		mcols() {
			let def = "1";
			let list = [];
			for (let b in breaks) {
				if (this[b]) {
					let size = parseInt(breaks[b].replace("px", ""));
					list.push({ size, cols: parseInt(this[b]) });
				}
			}
			list.reverse();

			if (list.length == 0) {
				return 1;
			}

			let result = {};

			let last = null;

			for (let item of list) {
				if (last == null) {
					result["default"] = item.cols;
					last = item.size;
				} else {
					result[last] = item.cols;
					last = item.size;
				}
			}

			return result;
		},
		mgutter() {
			if (this.gap) {
				return this.gap;
			}
			return "0px";
		},
		style() {
			let res = Object.assign({}, createStyles(this));
			return res;
		},
		klass() {
			let s = Object.assign(
				createClass(this, "mas-component", boxClass),
				createClass(this, "mas-component", myClass)
			);
			return s;
		}
	}
};
</script>

<style lang="scss">
.mas-component {
	& > div > * + * {
		margin-top: var(--mas-gap, 0px);
	}

	&.mas-component--grow {
		flex-grow: 1;
	}

	&.mas-component--shrink {
		flex-shrink: 1;
	}

	&.mas-component--expand {
		flex-grow: 9999;
	}

	&.mas-component--full {
		height: 100%;
	}

	&.mas-component--zero {
		flex-basis: 0px;
	}

	&.mas-component--top {
		align-items: start;
	}

	&.mas-component--bottom {
		align-items: end;
	}

	&.mas-component--scroll {
		overflow: auto;
		flex-basis: 0px;
	}
}
</style>