<template>
	<div class="max-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box);
</script>

<style lang="scss">
$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
	xl 1200px 1140px !default;

.max-component {
	margin: 0px auto;
	@each $breakpoint in $breakpoints {
		$name: nth($breakpoint, 1);
		$size: nth($breakpoint, 2);
		$max: nth($breakpoint, 3);
		@media only screen and (min-width: $size) {
			max-width: $max;
		}
	}
}
</style>