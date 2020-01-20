<template>
	<div>
		<hor>
			<div @click="page = 'box'" style="padding: 10px; cursor: pointer">Box</div>
			<div @click="page = 'boxChild'" style="padding: 10px; cursor: pointer">Child</div>
			<div @click="page = 'grid'" style="padding: 10px; cursor: pointer">Grid</div>
			<div @click="page = 'all'" style="padding: 10px; cursor: pointer">All</div>
			<div @click="page = 'dev'" style="padding: 10px; cursor: pointer">Dev</div>
		</hor>

		<AllPage v-if="page == 'all'" />
		<ChildPage v-if="page == 'boxChild'" />
		<BoxPage v-if="page == 'box'" />
		<GridPage v-if="page == 'grid'" />
		<ShortPage v-if="page == 'short'" />
		<DevPage v-if="page == 'dev'" />

		<breakpoint />
	</div>
</template>

<script >
import BoxPage from "./BoxPage"
import AllPage from "./AllPage"
import ChildPage from "./ChildPage"
import GridPage from "./GridPage"
import ShortPage from "./ShortPage"
import DevPage from "./DevPage"

export default {
	data() {
		return {
			page: "dev"
		};
	},
	components: {
		AllPage,
		BoxPage,
		ChildPage,
		GridPage,
		ShortPage,
		DevPage
	}
};
</script>

<style lang="css">
html,
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>