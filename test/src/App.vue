<template>
	<max>
		<div style="height: 100px; border: 1px solid black">
			<hor full>
				<box size="200px" grow>
					<div style="background: red">img</div>
				</box>
				<box size="300px" expand>
					<cen>
						<span>text</span>
					</cen>
				</box>
			</hor>
		</div>
		<div style="height: 100px; border: 1px solid black">
			<cols full sm="200px 1fr">
				<div style="background: red">img</div>
				<hor full>
					<box size="200px" grow>
						<div style="background: red">img</div>
					</box>
					<box size="300px" expand>
						<cen>
							<span>text</span>
						</cen>
					</box>
				</hor>
			</cols>
		</div>
		<div style="height: 100px; border: 1px solid black">
			<cols full>
				<item></item>
				<box span="2">
					<item></item>
				</box>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</cols>
		</div>
		<div>Spans</div>
		<div style="height: 100px; border: 1px solid black">
			<cols full xs="4">
				<item></item>
				<box span-lg="2">
					<item></item>
				</box>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</cols>
		</div>

		<div style="height: 200px; border: 1px solid black">
			<rows full xs="2">
				<item></item>
				<item></item>
				<item></item>
			</rows>
		</div>

		<div style="height: 100px; border: 1px solid black">
			<div class="hor full right">
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</div>
		</div>

		<div>Ver scroll full gap</div>
		<div style="height: 100px; border: 1px solid black">
			<ver scroll full gap="1em">
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</ver>
		</div>

		<div style="height: 100px; border: 1px solid black">
			<cols xs="1/4" full gap="10px">
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</cols>
		</div>
		<div style="height: 300px; border: 1px solid black">
			<grid xs="h / l / r / c/ f" lg="h h h / l c r / f f f | 100px 1fr 100px" gap="1em">
				<box area="h">
					<item />
				</box>
				<box area="l">
					<item />
				</box>
				<box area="r">
					<item />
				</box>
				<box area="c">
					<item />
				</box>
				<box area="f">
					<item />
				</box>
			</grid>
		</div>
		<breakpoint />
	</max>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "app"
});
</script>

