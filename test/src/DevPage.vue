<template>
	<div>
		<h1>dev</h1>
		<ver height="400px" class="b" scroll>
			<item v-for="i in 100">{{i}}</item>
		</ver>
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
.parent {
	border: 1px solid gray;
	margin-top: 10px;
	padding: 10px;
}
</style>
