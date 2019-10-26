<template>
	<div class="wrap-component" :class="klass" :style="style" @click="$emit('click')">
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

const klass = [...boxClass];
const params = [...boxStyle];

export default {
	props: [...klass, ...params],
	computed: {
		klass() {
			let s = createClass(this, "box-component", boxClass);
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
.wrap-component {
	&.wrap-component--grow {
		flex-grow: 1;
	}

	&.wrap-component--shrink {
		flex-shrink: 1;
	}

	&.wrap-component--expand {
		flex-grow: 9999;
	}

	&.wrap-component--full {
		height: 100%;
	}

	&.wrap-component--zero {
		flex-basis: 0px;
	}
}
</style>