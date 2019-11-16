<template>
	<div class="hor-component" :class="klass" :style="style" @click="$emit('click')">
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
		s["--hor-gap"] = vm.gap;
	}

	return s;
}

const myClass = [
	"top",
	"bottom",
	"left",
	"right",
	"center",
	"middle",
	"wrap",
	"around",
	"base",
	"space",
	"evenly",
	"gap"
];

const props = [...boxStyle, ...boxClass, ...myClass];

export default {
	props,
	computed: {
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "hor-component", myClass),
				createClass(this, "hor-component", boxClass)
			);
			return s;
		},
		style() {
			let s = createStyles(this);
			return s;
		}
	}
};
</script>

<style lang="scss">
.hor-component {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	&.hor-component--top {
		align-items: flex-start;
	}
	&.hor-component--bottom {
		align-items: flex-end;
	}
	&.hor-component--center {
		align-items: center;
	}
	&.hor-component--base {
		align-items: baseline;
	}
	&.hor-component--left {
		justify-content: flex-start;
	}
	&.hor-component--right {
		justify-content: flex-end;
	}
	&.hor-component--middle {
		justify-content: center;
	}
	&.hor-component--space {
		justify-content: space-between;
	}
	&.hor-component--around {
		justify-content: space-around;
	}
	&.hor-component--evenly {
		justify-content: space-evenly;
	}
	&.hor-component--wrap {
		flex-wrap: wrap;
	}

	&.hor-component--grow {
		flex-grow: 1;
	}

	&.hor-component--shrink {
		flex-shrink: 1;
	}

	&.hor-component--expand {
		flex-grow: 9999;
	}

	&.hor-component--full {
		height: 100%;
	}

	&.hor-component--zero {
		flex-basis: 0px;
	}

	&.hor-component--gap > * + * {
		margin-top: var(--hor-gap);
	}

	&.hor-component--scroll {
		overflow: auto;
		flex-basis: 0px;
	}
}
</style>