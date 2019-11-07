<template>
	<div class="cen-component" :class="klass" :style="style" @click="$emit('click')">
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
 if (vm.area){
        s["grid-area"] = vm.area;
    }
	return s;
}

const klass = [...boxClass];
const params = [...boxStyle];

export default {
	props: [...klass, ...params],
	computed: {
		klass() {
			let s = createClass(this, "cen-component", boxClass);
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
.cen-component {
	display: flex;
	justify-content: center;
	align-items: center;

	&.cen-component--grow {
		flex-grow: 1;
	}

	&.cen-component--shrink {
		flex-shrink: 1;
	}

	&.cen-component--expand {
		flex-grow: 9999;
	}

	&.cen-component--full {
		height: 100%;
	}

	&.cen-component--zero {
		flex-basis: 0px;
	}

	&.cen-component--scroll {
		overflow: auto;
	}
}
</style>