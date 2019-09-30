<template>
	<div class="ber ber-grid" :style="style" :class="klass">
		<slot />
	</div>
</template>

<script>
const props = ["xs", "sm", "md", "lg", "xl", "xxl", "rh", "fh", "qh", "kh"];
const ber = ["grow", "expand", "full", "shrink"];

export default {
	props: ["gap", ...props, ...ber],
	computed: {
		style() {
			let res = {};

			for (const size of props) {
				if (this[size]) {
					/** @type { String } */
					let value = "" + this[size] + "";

					if (value.match(/^\d+$/)) {
						value = `auto / repeat(auto-fill, minmax(calc(100% * 1 / ${value} - ${this
							.gap || "1rem"}), 1fr))`;
					} else if (value.match(/^\d+\/\d+$/)) {
						value = `auto / repeat(auto-fill, minmax(calc(100% * ${value} - ${this
							.gap || "1rem"}), 1fr))`;
					} else if (!value.includes("/") && !value.includes(" ")) {
						value = `auto / repeat(auto-fill, minmax(${value}, 1fr))`;
					}

					res["--" + size] = value;
				}
			}

			res["grid-gap"] = this.gap || "1rem";

			return res;
		},
		klass() {
			let res = {};
			for (const size of props) {
				if (this[size]) {
					res["ber-grid--" + size] = true;
				}
			}

			for (let key of ber) {
				if (this[key] !== undefined) {
					res[`ber-grid--${key}`] = true;
				}
			}
			return res;
		}
	}
};
</script>

<style lang="scss">
.ber-grid {
	display: grid;

	&.ber-grid--grow {
		flex-grow: 1;
	}

	&.ber-grid--shrink {
		flex-shrink: 1;
	}

	&.ber-grid--expand {
		flex-grow: 9999;
	}

	&.ber-grid--full {
		height: 100%;
	}

	$breakpoints: xs 0px 100%, sm 576px 540px, md 768px 720px, lg 992px 960px,
		xl 1100px 1068px, xxl 1332px 1300px, rh 1632px 1600px, fh 1832px 1800px,
		qh 2232px 2200px, kh 3032px 3000px !default;

	@each $breakpoint in $breakpoints {
		$name: nth($breakpoint, 1);
		$size: nth($breakpoint, 2);
		$container: nth($breakpoint, 3);

		@media only screen and (min-width: $size) {
			&.ber-grid--#{$name} {
				grid: var(--#{$name});
			}
		}
	}
}
</style>