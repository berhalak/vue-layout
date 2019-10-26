<template>
	<div class="ver-component" :class="klass" @click="$emit('click')">
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

const myClass = [
	"top",
	"bottom",
	"left",
	"right",
	"center",
	"middle",
	"wrap",
	"around",
	"space",
	"evenly"
];
const klass = [...boxClass, ...myClass];
const params = [...boxStyle];

export default {
	props: [...klass, ...params],
	computed: {
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "ver-component", myClass),
				createClass(this, "ver-component", boxClass)
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
.ver-component {
	display: flex;
	flex-direction: column;
	&.ver-component--top {
		justify-content: flex-start;
	}
	&.ver-component--bottom {
		justify-content: flex-end;
	}
	&.ver-component--center {
		align-items: center;
	}
	&.ver-component--left {
		align-items: flex-start;
	}
	&.ver-component--right {
		align-items: flex-start;
	}
	&.ver-component--middle {
		justify-content: center;
	}
	&.ver-component--space {
		justify-content: space-between;
	}
	&.ver-component--around {
		justify-content: space-around;
	}
	&.ver-component--evenly {
		justify-content: space-evenly;
	}
	&.ver-component--wrap {
		flex-wrap: wrap;
	}

	&.ver-component--grow {
		flex-grow: 1;
	}

	&.ver-component--shrink {
		flex-shrink: 1;
	}

	&.ver-component--expand {
		flex-grow: 9999;
	}

	&.ver-component--zero {
		flex-basis: 0px;
	}

	&.ver-component--scroll {
		overflow: auto;
	}

	&.ver-component--full {
		height: 100%;
	}
}
</style>