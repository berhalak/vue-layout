<template>
	<div class="item">
		<div class="item_inner">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.item {
	padding: 10px;
	border: 1px solid lightblue;
	.item_inner {
		background: red;
		padding: 5px;
		height: 100%;
	}
}
</style>