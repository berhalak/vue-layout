<script>
import { build, Box, classBuilder } from "./core";
const comp = {}
comp.functional = true;

comp.render = function (h, self) {
	/** @type { HTMLDivElement } */
	const child = self.children[0];
	if (self.props !== undefined) {
		child.data = child.data || {};
		child.data.staticClass = child.data.staticClass || "";
		child.data.staticClass += (child.data.staticClass ? " " : "") + classBuilder(self.props, Box);
	}
	return child;
}

export default comp;
</script>