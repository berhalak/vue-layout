<template>
	<div class="box-element grid-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	map: {
		can(name) {
			return name == "grid";
		},
		has(b, name, v) {
			return v[b] !== undefined && v[b] !== false;
		},
		get(b, name, v) {
			return v[b];
		}
	}
});
</script>

<style lang="css">
.grid-component {
	display: grid;
}
.box-element.box-element--fill > * {
	flex-grow : 1;
}
</style>