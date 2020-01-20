<template>
	<div class="rows-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	map: {
		can(name) {
			return name == "rows";
		},
		has(b, name, v) {
			if (b == "xs") {
				// rows has a default auto row
				return true;
			}
			return v[b] !== undefined && v[b] !== false;
		},
		get(b, name, v) {
			return v[b] || "auto";
		}
	}
});
</script>

<style lang="css">
.rows-component {
	display: grid;
}
</style>