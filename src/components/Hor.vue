<template>
	<div class="ber-hor" :class="klass" :style="style">
		<slot />
	</div>
</template>

<script>
const flags = [
	"top",
	"bottom",
	"left",
	"right",
	"center",
	"middle",
	"wrap",
	"around",
	"space",
	"evenly"
];
const ber = ["grow", "expand", "full", "shrink"];
export default {
	props: [...flags, ...ber, "size"],
	computed: {
		klass() {
			let s = {};
			for (let key of flags) {
				if (this[key] !== undefined && this[key] !== false) {
					s[`ber-hor--${key}`] = true;
				}
			}
			for (let key of ber) {
				if (this[key] !== undefined && this[key] !== false) {
					s[`ber-hor--${key}`] = true;
				}
			}
			if (this.wrap === undefined) {
				s["ber-hor--wrap"] = true;
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
.ber-hor {
	display: flex;
	flex-direction: row;
	&.ber-hor--top {
		align-items: flex-start;
	}
	&.ber-hor--bottom {
		align-items: flex-end;
	}
	&.ber-hor--center {
		align-items: center;
	}
	&.ber-hor--left {
		justify-content: flex-start;
	}
	&.ber-hor--right {
		justify-content: flex-end;
	}
	&.ber-hor--middle {
		justify-content: center;
	}
	&.ber-hor--space {
		justify-content: space-between;
	}
	&.ber-hor--around {
		justify-content: space-around;
	}
	&.ber-hor--evenly {
		justify-content: space-evenly;
	}
	&.ber-hor--wrap {
		flex-wrap: wrap;
	}

	&.ber-hor--grow {
		flex-grow: 1;
	}

	&.ber-hor--shrink {
		flex-shrink: 1;
	}

	&.ber-hor--expand {
		flex-grow: 9999;
	}

	&.ber-hor--full {
		height: 100%;
	}
}
</style>