<template>
	<div class="ber-ver" :class="klass">
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
					s[`ber-ver--${key}`] = true;
				}
			}
			for (let key of ber) {
				if (this[key] !== undefined && this[key] !== false) {
					s[`ber-ver--${key}`] = true;
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
.ber-ver {
	display: flex;
	flex-direction: column;
	&.ber-ver--top {
		justify-content: flex-start;
	}
	&.ber-ver--bottom {
		justify-content: flex-end;
	}
	&.ber-ver--center {
		align-items: center;
	}
	&.ber-ver--left {
		align-items: flex-start;
	}
	&.ber-ver--right {
		align-items: flex-start;
	}
	&.ber-ver--middle {
		justify-content: center;
	}
	&.ber-ver--space {
		justify-content: space-between;
	}
	&.ber-ver--around {
		justify-content: space-around;
	}
	&.ber-ver--evenly {
		justify-content: space-evenly;
	}

	&.ber-ver--wrap {
		flex-wrap: wrap;
	}

	&.ber-ver--grow {
		flex-grow: 1;
	}

	&.ber-ver--shrink {
		flex-shrink: 1;
	}

	&.ber-ver--expand {
		flex-grow: 9999;
	}

	&.ber-ver--full {
		height: 100%;
	}
}
</style>