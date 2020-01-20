<template>
	<div class="box-element box-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box);
</script>

<style lang="css">
.box-component {
	display: flex;
	flex-direction: column;
}
.box-element.box-element--fill > * {
	flex-grow: 1;
}
</style>