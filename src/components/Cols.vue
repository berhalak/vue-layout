<template>
	<div class="ber-cols" :style="style" :class="klass">
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

					// number of columns
					if (value.match(/^\d+$/)) {
						value = `repeat(auto-fill, minmax(calc(100% * 1 / ${value} - ${this
							.gap || "0px"}), 1fr))`;
					}
					// repeat single column
					else if (!value.includes(" ")) {
						if (value.includes("/")) {
							value = value.replace(
								/(\d+)\/(\d+)/g,
								`calc(100% * $1 / $2 - ${this.gap || "0px"})`
							);
						}
						value = `repeat(auto-fill, minmax(${value}, 1fr))`;
					} else {
						if (value.includes("/")) {
							value = value.replace(
								/(\d+)\/(\d+)/g,
								`calc(100% * $1 / $2 - ${this.gap || "0px"})`
							);
						}
					}
					res["--" + size] = "auto / " + value;
				}
			}

			res["grid-gap"] = this.gap || "0px";

			return res;
		},
		klass() {
			let res = {};
			for (const size of props) {
				if (this[size]) {
					res["ber-cols--" + size] = true;
				}
			}

			for (let key of ber) {
				if (this[key] !== undefined) {
					res[`ber-cols--${key}`] = true;
				}
			}

			return res;
		}
	}
};
</script>

<style lang="scss">
.ber-cols {
	display: grid;
	grid-auto-flow: column;

	&.ber-cols--grow {
		flex-grow: 1;
	}

	&.ber-cols--shrink {
		flex-shrink: 1;
	}

	&.ber-cols--expand {
		flex-grow: 9999;
	}

	&.ber-cols--full {
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
			&.ber-cols--#{$name} {
				grid: var(--#{$name});
			}
		}
	}
}
</style>