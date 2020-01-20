<template>
	<div class="box-element fill-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	fill: {
		type: String,
		default: ""
	}
});
</script>

<style lang="css">
.fill-component {
	display: flex;
	flex-direction: row;
}
.box-element.box-element--fill > * {
	flex-grow: 1;
}
</style>