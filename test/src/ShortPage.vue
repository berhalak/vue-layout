<template>
	<div>
		<hor>
			<item />
			<item />
			<item />
		</hor>

		<cen class="play">
			<item />
		</cen>

		<cols xs="10% 1fr 10%" class="parent">
			<item />
			<item />
			<item />
		</cols>
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
