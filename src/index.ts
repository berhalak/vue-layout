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
import Mas from "./components/Mas.vue";
import Lane from "./components/Lane.vue";
import Fill from "./components/Fill.vue";

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
	Lane,
	Wrap,
	Fill,
	Mas,
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
	Fill,
	Lane,
	Wrap,
	Mas,
	Breakpoint
}

const plugin = {
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

let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = (global as any).Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default plugin;
