<template>
	<div class="box-element ver-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
// ver is just a box component
import { build, Box } from "./core";
export default build(Box);
</script>

<style lang="css">
.ver-component {
	display: flex;
	flex-direction: column;
}
.box-element.box-element--fill > * {
	flex-grow: 1;
}
</style>