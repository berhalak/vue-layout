<template>
	<div id="breakpoint"></div>
</template>

<style lang="scss">
#breakpoint {
	position: fixed;
	bottom: 0px;
	right: 0px;
	color: black;
	font-size: 12px;
	padding-right: 2px;
	padding-bottom: 2px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

$breakpoints: xs 100%, sm 640px, md 768px, lg 1024px, xl 1280px, xxl 1332px,
	rh 1632px, fh 1832px, qh 2232px, kh 3032px !default;

@each $breakpoint in $breakpoints {
	$name: nth($breakpoint, 1);
	$size: nth($breakpoint, 2);

	@media only screen and (min-width: $size) {
		#breakpoint::after {
			content: "#{$name}";
		}
	}
}
</style>