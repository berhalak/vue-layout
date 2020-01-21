import { StyleSheet, css } from "aphrodite";
import { breaks, props } from './props';

function isOn(value: any) {
	return value !== undefined && value !== false;
}

export type Accessor = {
	can: (name: string) => boolean;
	has: (b: string, vm: any, name: string) => boolean,
	get: (b: string, vm: any, name: string) => any,
}

// hooks
function _has(breakName: string, props: any, map: Accessor | null, name: string) {
	if (map?.can(name)) {
		const ar = map.has(breakName, name, props);
		if (ar !== undefined) return ar;
	}
	const fullPropName = `${breakName}:${name}`;
	let ok = isOn(props[fullPropName]);
	if (!ok && breakName == "xs") {
		ok = isOn(props[name]);
	}
	return ok;
}
function _get(breakName: string, props: any, map: Accessor | null, name: string) {
	if (map?.can(name)) {
		const ar = map.get(breakName, name, props);
		if (ar !== undefined) return ar;
	}
	let ok = props[`${breakName}:${name}`];
	if (!ok && breakName == "xs") {
		ok = props[name];
	}
	return ok;
}

function _media(breakName: string, klass: any, styles: any) {
	const size = (breaks as any)[breakName];
	const key = `@media only screen and (min-width: ${size})`;
	const entry = klass[key] || {};
	Object.assign(entry, styles);
	klass[key] = entry;
}

let has: (x: string) => any;
let get: (x: string) => any;
let media: (x: any) => any;

type Builder = { build: () => void }

function comp(buildClass: Builder, def: any) {
	return {
		props: def ? Object.assign({}, props, def) : props,
		computed: {
			className(): any {
				const name = classBuilder(this, buildClass, def?.map);
				return {
					"box-element--fill": isOn((this as any).fill),
					[name]: true
				}
			}
		}
	}
}


export function classBuilder(props: any, builder: Builder, map: Accessor) {
	function buildBreaks(vm: any) {
		let result = {};
		for (let b in breaks) {
			has = _has.bind(null, b, vm, map);
			get = _get.bind(null, b, vm, map);
			media = _media.bind(null, b, result);

			builder.build();
		}
		return result;
	}
	let style = buildBreaks(props)
	let styles = StyleSheet.create({ style });
	return css(styles.style);
}

export function build(builder: Builder, def: any = {}) {
	return comp(builder, def);
}


function isNumber(text: string) {
	return Number.isInteger(Number(text));
}

function evalSizes(text: string) {
	text = text.replace(
		/(\d+)\/(\d+)/g,
		`calc(100% * $1 / $2)`
	);
	return text;
}

// components


export const Box = {

	build() {
		function isHor() {
			return has("hor") || has("rows")
		}

		function isVer() {
			return !isHor();
		}


		if (has('w100')) {
			media({
				width: "100%"
			})
		}

		if (has('h100')) {
			media({
				height: "100%"
			})
		}

		if (has('size')) {
			media({
				flexBasis: get('size')
			})
		}
		if (has('hor')) {
			media({
				display: 'flex',
				flexDirection: 'row'
			})
		}
		if (has('wrap')) {
			media({
				flexWrap: 'wrap'
			})
		}
		if (has('ver')) {
			media({
				display: 'flex',
				flexDirection: 'column'
			})
		}
		if (has('width')) {
			let v = get('width');
			if (v == "grow") {
				media({
					flexGrow: 1
				})
			} else {
				media({
					width: get('width')
				})
			}
		}
		if (has('height')) {
			media({
				height: get('height')
			})
		}

		if (has('hide')) {
			media({
				['display']: 'none'
			})
		}

		if (has('show')) {
			media({
				display: 'initial'
			})
		}



		if (has('grow')) {
			media({
				flexGrow: 1
			})
		}

		if (has('expand')) {
			media({
				flexGrow: 9999
			})
		}

		if (has('col')) {
			let value = get('col') as string;
			if (!value.includes("col")) {
				if (value.includes("/")) {
					let parts = value.split("/").map(x => parseInt(x.trim()));
					parts[1]++;
					value = parts.join("/");
				}
			}
			media({
				gridColumn: value
			})
		}

		if (has('pass')) {
			let value = get('pass') as string;

			media({
				gridRowEnd: 'span ' + value
			})
		}

		if (has('span')) {
			let value = get('span') as string;

			if (value.includes("/")) {
				var parts = value.split("/");
				parts[0] = (parseInt(parts[0]) - 1).toString();
				value = parts.join("/");
			} else {
				value = "span " + value;
			}

			media({
				gridColumn: value
			})
		}

		if (has('area')) {
			media({
				gridArea: get('area')
			})
		}

		if (has('space')) {
			media({
				justifyContent: "space-between"
			})
		}

		if (has('full')) {
			media({
				height: '100%'
			})
		}

		if (has('gap')) {
			media({
				gridGap: get("gap")
			})
		}

		if (has('right')) {
			if (isHor()) {
				media({
					justifyContent: 'flex-end'
				})
			} else {
				media({
					alignItems: 'flex-end'
				})
			}
		}

		if (has('left')) {
			if (isHor()) {
				media({
					justifyContent: 'flex-start'
				})
			} else {
				media({
					alignItems: 'flex-start'
				})
			}
		}

		if (has('center')) {
			media({
				alignItems: 'center'
			})
		}

		if (has('top')) {

			if (isHor()) {
				media({
					alignItems: 'flex-start'
				})
			} else {
				media({
					justifyContent: 'flex-start'
				})
			}
		}



		if (has('middle')) {
			media({
				justifyContent: 'center'
			})
		}


		if (has('bottom')) {

			if (isHor()) {
				media({
					alignItems: 'flex-end'
				})
			} else {
				media({
					justifyContent: 'flex-end'
				})
			}
		}


		if (has('scroll')) {
			media({
				flexBasis: "0px",
				overflow: "auto"
			})
		}

		if (has("rows")) {
			let value = get("rows") as string;
			value = value || "12";

			if (isNumber(value)) {
				media({
					display: "grid",
					gridTemplateRows: `repeat(${value}, 1fr)`
				})
			} else {
				// it is bare columns
				value = evalSizes(value);
				media({
					display: "grid",
					gridTemplateRows: `${value}`
				})
			}
		}

		if (has("cols")) {
			let value = get("cols") as string;
			value = value || "12";

			if (isNumber(value)) {
				media({
					display: "grid",
					gridTemplateColumns: `repeat(${value}, 1fr)`
				})
			} else {
				// it is bare columns
				value = evalSizes(value);
				media({
					display: "grid",
					gridTemplateColumns: `${value}`
				})
			}
		}


		if (has("grid")) {
			let value = (get("grid") as string)?.trim();

			// allowed formats
			// a b c / a d f | 1px 1fr auto / 20px 100px // FULL
			// 1px 1fr auto / 20px 100px // without areas (fist must be integer)
			// 12 / 20px 100px // without areas and number of columns (fist must be integer)
			// 1px 1fr auto // only columns first must be integer, no " / " sign
			// a b c / a d f // only areas
			// a b c // only areas
			// a b c | 1px 2px 3px // areas and columns

			// swap rows and columns

			// test format 1
			let gridTemplateAreas = "";
			let gridTemplateRows = "";
			let gridTemplateColumns = "";

			function area(w: string) {
				return w.split("/").map(x => `"${x.trim()}"`).join(" ");
			}

			// test first
			if (value.match(/.*?\/.*?\|.+?\//)) {
				gridTemplateAreas = area(value.split("|")[0]);
				gridTemplateColumns = value.split("|")[1].split("/")[0];
				gridTemplateRows = value.split("|")[1].split("/")[1];
			} else if (value.match(/^\d.*?\//)) {
				// 1px / 2px
				// 12 / 2px auto
				gridTemplateColumns = value.split("/")[0].trim();
				// if this is only number of columns, generate them
				if (gridTemplateColumns.match(/^\d+$/)) {
					gridTemplateColumns = `repeat(${gridTemplateColumns}, 1fr)`
				}
				gridTemplateRows = value.split("/")[1];
			} else if (value.match(/^\d/)) {
				gridTemplateColumns = value;
			} else if (value.match(/.*?\/.*?/)) {
				gridTemplateAreas = area(value);
			} else if (value.match(/^\w.*?\|.*?/)) {
				gridTemplateAreas = area(value.split("|")[0]);
				gridTemplateColumns = value.split("|")[1];
			} else {
				gridTemplateAreas = area(value);
			}

			media({
				display: "grid",
				gridTemplateAreas,
				gridTemplateRows,
				gridTemplateColumns,
			})
		}


		if (has('line')) {
			media({
				alignItems: 'baseline'
			})
		}
	}
}
