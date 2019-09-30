<template>
	<div class="ber-box" :class="klass" :style="style">
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
			for (let key of ber) {
				if (this[key] !== undefined) {
					s[`ber-box--${key}`] = true;
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
.ber-box {
	> div {
		height: 100%;
	}

	&.ber-box--grow {
		flex-grow: 1;
	}

	&.ber-box--shrink {
		flex-shrink: 1;
	}

	&.ber-box--expand {
		flex-grow: 9999;
	}

	&.ber-box--full {
		height: 100%;
	}
}
</style>