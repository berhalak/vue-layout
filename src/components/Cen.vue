<template>
	<div class="cen-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	center: {
		type: String,
		default: ""
	}
});
</script>
<style lang="css">
.cen-component {
	display: flex;
	flex-direction: column;
}
</style>