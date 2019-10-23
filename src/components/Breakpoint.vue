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

$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
	xl 1100px 1068px, xxl 1332px 1300px, rh 1632px 1600px, fh 1832px 1800px,
	qh 2232px 2200px, kh 3032px 3000px !default;

@each $breakpoint in $breakpoints {
	$name: nth($breakpoint, 1);
	$size: nth($breakpoint, 2);
	$container: nth($breakpoint, 3);

	@media only screen and (min-width: $size) {
		#breakpoint::after {
			content: "#{$name}";
		}
	}
}
</style>