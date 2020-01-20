<template>
	<div class="box-element hor-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	hor: {
		type: String,
		default: ""
	}
});
</script>

<style lang="css">
.hor-component {
	display: flex;
	flex-direction: row;
}
.box-element.box-element--fill > * {
	flex-grow : 1;
}
</style>