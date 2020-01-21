<template>
	<div class="box-element cen-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	center: {
		type: String,
		default: ""
	},
	middle: {
		type: String,
		default: ""
	},
});
</script>
<style lang="css">
.cen-component {
	display: flex;
	flex-direction: column;
}
.box-element.box-element--fill > * {
	flex-grow: 1;
}
</style>