<template>
	<div class="cols-component" :class="className" @click="$emit('click')">
		<slot />
	</div>
</template>

<script>
import { build, Box } from "./core";
export default build(Box, {
	map: {
		can(name) {
			return name == "cols";
		},
		has(b, name, v) {
			if (b == "xs") {
				return true;
			}
			return v[b] !== undefined && v[b] !== false;
		},
		get(b, name, v) {
			return v[b] || "";
		}
	}
});
</script>

<style lang="css">
.cols-component {
	display: grid;
}
</style>