<template>
	<div class="box-component" :class="klass" :style="style" @click="$emit('click')">
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
let boxStyle = ["size", "width", "height", "span", "area"];
function firstUpper(/**  @type { String} */ t) {
	return t[0].toUpperCase() + t.substring(1);
}

let boxSpan = breakPoints.map(x => `span${firstUpper(x)}`);
boxStyle = boxStyle.concat(boxSpan);

function createClass(vm, prefix, flags) {
	let s = {};
	for (let key of breakPoints) {
		if (vm[key] !== undefined && vm[key] !== false) {
			s[`${prefix}--${key}`] = true;
		}
	}
	return s;
}

function createSpans(vm, prefix) {
	let s = {};
	for (let b of breakPoints) {
		const spanValue = vm["span" + firstUpper(b)];
		if (spanValue) {
			s[prefix + "--span-" + b] = true;
		}
	}
	if (vm.span) {
		s[prefix + "--span-xs"] = true;
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
		s["--box-span-xs"] = "span " + vm.span;
	}

	for (let b of breakPoints) {
		const spanValue = vm["span" + firstUpper(b)];
		if (spanValue) {
			s["--box-span-" + b] = "span " + spanValue;
		}
	}

	if (vm.area) {
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
			let s = createClass(this, "box-component", boxClass);
			let spans = createSpans(this, "box-component");
			return Object.assign(s, spans);
		},
		style() {
			let s = createStyles(this);
			return s;
		}
	}
};
</script>

<style lang="scss">
.box-component {
	> * {
		height: 100%;
	}

	&.box-component--grow {
		flex-grow: 1;
	}

	&.box-component--shrink {
		flex-shrink: 1;
	}

	&.box-component--expand {
		flex-grow: 9999;
	}

	&.box-component--full {
		height: 100%;
	}

	&.box-component--zero {
		flex-basis: 0px;
	}

	&.box-component--scroll {
		overflow: auto;
		flex-basis: 0px;
	}
}

$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
	xl 1100px 1068px, xxl 1332px 1300px, rh 1632px 1600px, fh 1832px 1800px,
	qh 2232px 2200px, kh 3032px 3000px !default;

@each $breakpoint in $breakpoints {
	$name: nth($breakpoint, 1);
	$size: nth($breakpoint, 2);
	$container: nth($breakpoint, 3);

	@media only screen and (min-width: $size) {
		&.box-component--span-#{$name} {
			grid-column: var(--box-span-#{$name});
		}
	}
}
</style>