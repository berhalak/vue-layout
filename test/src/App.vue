<template>
	<div>
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

		<div style="height: 100px; border: 1px solid black">
			<cols full xs="4">
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

		<div style="height: 100px; border: 1px solid black">
			<ver scroll full>
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
		<breakpoint />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "app"
});
</script>

