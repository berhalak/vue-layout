<template>
	<div class="ber-cen" :class="klass" :style="style">
		<slot />
	</div>
</template>


<script>
const ber = ["grow", "expand", "full", "shrink"];
export default {
	props: [...ber, "size"],
	computed: {
		klass() {
			let s = {};
			for (let key in ber) {
				if (this[key] !== undefined) {
					s[`ber-cen--${key}`] = true;
				}
			}
			return s;
		},
		style() {
			let s = {};
			if (this.size !== undefined) {
				s["flex-basis"] = this.size;
			}
			return s;
		}
	}
};
</script>

<style lang="scss">
.ber-cen {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&.ber-cen--grow {
		flex-grow: 1;
	}

	&.ber-cen--shrink {
		flex-shrink: 1;
	}

	&.ber-cen--expand {
		flex-grow: 9999;
	}

	&.ber-cen--full {
		height: 100%;
	}
}
</style>