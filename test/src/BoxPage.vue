<template>
	<div>
		<h3>play</h3>
		<box class="play" center>
			<item />
			<item />
		</box>
		<h3>hor</h3>
		<span>left</span>
		<box hor left class="playh">
			<item v-for="i in 2" :key="i" />
		</box>
		<span>right</span>
		<box hor right class="playh">
			<item v-for="i in 2" :key="i" />
		</box>
		<span>between</span>
		<box hor middle class="playh">
			<item v-for="i in 2" :key="i" />
		</box>
		<span>bottom</span>
		<box hor bottom class="play">
			<item v-for="i in 3" :key="i" />
		</box>
		<span>top</span>
		<box hor top class="play">
			<item v-for="i in 3" :key="i" />
		</box>
		<span>middle</span>
		<box hor center middle class="play">
			<item v-for="i in 3" :key="i" />
		</box>
		<h3>ver</h3>
		<box hor fill height="150px" class="b">
			<ver class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
			<ver left class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
			<ver center class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
			<ver right class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
		</box>
		<box hor fill height="150px" class="b">
			<ver bottom class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
			<ver middle class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
			<ver top class="b">
				<item v-for="i in 3" :key="i" />
			</ver>
		</box>
		<h3>cen</h3>
		<cen class="play">
			<item />
		</cen>
	</div>
</template>

<style >
.h100 {
	height: 100%;
}
.b {
	border: 1px solid gray;
}
.play {
	height: 100px;
	width: 100px;
	margin-top: 10px;
	border: 1px solid gray;
}
.playh {
	width: 100px;
	border: 1px solid gray;
	margin-top: 10px;
}
</style>
