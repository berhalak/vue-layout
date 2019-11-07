<template>
	<div class="max-component" :style="style" :class="klass"  @click="$emit('click')">
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
	props: [...props],
	computed: {
		style() {
			let res = createStyles(this);
			return res;
		},
		klass() {
			let s = Object.assign(
				{},
				createClass(this, "grid-component", boxClass)
			);
			return s;
		}
	}
};
</script>

<style lang="scss">
$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
	xl 1100px 1068px, xxl 1224px 1200px !default;

@each $breakpoint in $breakpoints {
	$name: nth($breakpoint, 1);
	$size: nth($breakpoint, 2);
	$max: nth($breakpoint, 3);

	@media only screen and (min-width: $size) {
		&.max-component {
			max-width: $max;
		}
	}
}

.max-component {
	margin: 0px auto;

	&.max-component--zero {
		flex-basis: 0px;
	}

	&.max-component--grow {
		flex-grow: 1;
	}

	&.max-component--shrink {
		flex-shrink: 1;
	}

	&.max-component--expand {
		flex-grow: 9999;
	}

	&.max-component--zero {
		flex-basis: 0px;
	}

	&.max-component--scroll {
		overflow: auto;
	}

	&.max-component--full {
		height: 100%;
	}
}
</style>