<template>
	<div>
		<h4>Horizontal</h4>
		<box hor class="parent">
			<box size="50px">
				<item />
			</box>
			<box size="100px">
				<item />
			</box>
		</box>
		<box hor class="parent" wrap>
			<box width="100px" grow>
				<item />
			</box>
			<box width="400px" expand>
				<item />
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
.parent {
	border: 1px solid gray;
	margin-top: 10px;
	padding: 10px;
}
</style>
