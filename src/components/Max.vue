<template>
	<div class="box-element max-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box);
</script>

<style lang="scss">
$breakpoints: 
    xs 100%, 
    sm 640px, 
    md 768px, 
    lg 1024px,
	xl 1280px !default;

.max-component {
	margin: 0px auto;
	@each $breakpoint in $breakpoints {
		$name: nth($breakpoint, 1);
		$size: nth($breakpoint, 2);
		@media only screen and (min-width: $size) {
			max-width: $size;
		}
	}

}
.box-element.box-element--fill > * {
	flex-grow: 1;
}
</style>