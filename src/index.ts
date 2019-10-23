import Grid from "./components/Grid.vue";
import Cols from "./components/Cols.vue";
import Rows from "./components/Rows.vue";
import Box from "./components/Box.vue";
import Cen from "./components/Cen.vue";
import Hor from "./components/Hor.vue";
import Ver from "./components/Ver.vue";
import Breakpoint from "./components/Breakpoint.vue";
import Max from "./components/Max.vue";
import Wrap from "./components/Wrap.vue";

import Vue from "vue";

let components = {
	Grid,
	Cols,
	Rows,
	Box,
	Cen,
	Hor,
	Ver,
	Max,
	Wrap,
	Breakpoint
}

export {
	Grid,
	Cols,
	Rows,
	Box,
	Cen,
	Hor,
	Max,
	Ver,
	Wrap,
	Breakpoint
}

export default {
	install(vue: typeof Vue, options: any) {
		let prefix = '';
		if (options && typeof options == 'string') {
			prefix = options;
		}
		for (let key in components) {
			vue.component(prefix + key.toLowerCase(), (components as any)[key]);
		}
	},
	...components
}