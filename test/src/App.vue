<template>
	<div>
		<div style="height: 100px; border: 1px solid black">
			<v-hor full>
				<v-box size="200px" grow>
					<div style="background: red">img</div>
				</v-box>
				<v-box size="300px" expand>
					<v-cen>
						<span>text</span>
					</v-cen>
				</v-box>
			</v-hor>
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
				<item></item>
				<item></item>
				<item></item>
			</cols>
		</div>

		<div style="height: 100px; border: 1px solid black">
			<div class="hor full right">
				<item></item>
				<item></item>
				<item></item>
				<item></item>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "app"
});
</script>

