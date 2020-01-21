export const breaks = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1100px",
    xxl: "1332px",
    rh: "1632px",
    fh: "1832px",
    qh: "2232px",
    kh: "3032px"
}

const nonResp = [...Object.keys(breaks)];
const respons = ["size", "width", "height", "hide", "show", "col", "span", "area", "grow", "expand", "full", "shrink", "zero", "scroll", "max", "auto", "gap"].concat(...[
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "centered",
    "cols",
    "rows",
    "pass",
    "fill",
    "h100",
    "w100",
    "between",
    "middle",
    "hor",
    "single",
    "grid",
    "wrap",
    "ver",
    "line",
    "around",
    "base",
    "space",
    "evenly"
]);

function* merge(a: string[], b: string[], m: (x: string, y: string) => string) {
    for (let ia of a) {
        for (let ib of b) {
            yield m(ia, ib);
        }
    }
}

const allProps = [...nonResp, ...respons, ...merge(Object.keys(breaks), respons, (a, b) => `${a}:${b}`)];

export const props: any = {};
allProps.forEach(x => props[x] = { type: String });