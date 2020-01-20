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
		<box hor between class="playh">
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
		<box hor middle class="play">
			<item v-for="i in 3" :key="i" />
		</box>
		<h3>ver</h3>
		<box hor height="150px" class="b">
			<box grow class="b">
				<item v-for="i in 3" :key="i" />
			</box>
			<box grow left class="b">
				left
				<item v-for="i in 3" :key="i" />
			</box>
			<box grow between class="b">
				middle
				<item v-for="i in 3" :key="i" />
			</box>
			<box grow right class="b">
				right
				<item v-for="i in 3" :key="i" />
			</box>
		</box>
		<box hor height="150px" class="b">
			bottom
			<box grow bottom class="b">
				<item v-for="i in 3" :key="i" />
			</box>center
			<box grow center class="b">
				<item v-for="i in 3" :key="i" />
			</box>
		</box>
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
