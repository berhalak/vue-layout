<template>
	<div>
		<h1>Grid</h1>
		<h4>cols</h4>
		<box cols class="parent">
			<box span="1">
				<item />
			</box>
			<box span="2">
				<item />
			</box>
		</box>

		<h4>cols 5</h4>
		<box cols="5" class="parent">
			<box span="1">
				<item />
			</box>
			<box span="2">
				<item />
			</box>
		</box>

		<h4>cols sizes</h4>
		<box cols="20px 40px 50px 60px" class="parent" gap="1px">
			<box span="1" hide>
				<item />
			</box>
			<box span="3">
				<item />
			</box>
		</box>

		<h4>rows sizes</h4>
		<box rows="40px 40px" class="parent" style="height: 220px">
			<box pass="2">
				<wrap grow>
					<item class="dupa" />
				</wrap>
			</box>
		</box>

		<h4>grid</h4>
		<box grid="a a / b b" class="parent" style="height: 220px">
			<wrap area="a">
				<item />
			</wrap>
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
