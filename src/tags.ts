import { props, breaks } from "./components/props"
import fs from "fs"

let out: any = {};


for (let c of ['box', "hor", "lane", "ver", "cols", "rows", "grid", "cen", "wrap", "fill", "max"]) {
    out[c] = []
    for (let prop of Object.keys(props)) {
        if (['cols', 'rows', 'grid'].includes(c)) {

        } else {
            if (prop in breaks) {
                continue;
            }
        }
        if (c == prop) {
            continue;
        }
        out[c].push(prop);
    }
}


const o = JSON.stringify(out, null, 2);

fs.writeFileSync("./dist/tags.json", o);