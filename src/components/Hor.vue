<template>
	<div class="hor-component" :class="className" @click="$emit('click')">
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
</style>