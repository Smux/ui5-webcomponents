import "@ui5/webcomponents/dist/json-imports/Themes.js";

import { registerThemeProperties } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

// Fiori assets
import fiori3 from "../assets/themes/sap_fiori_3/parameters-bundle.css.json";
import fiori3Dark from "../assets/themes/sap_fiori_3_dark/parameters-bundle.css.json";
import belize from "../assets/themes/sap_belize/parameters-bundle.css.json";
import belizeHcb from "../assets/themes/sap_belize_hcb/parameters-bundle.css.json";

const isInlined = obj => typeof (obj) === "object";

/* eslint-disable */
if (isInlined(fiori3) || isInlined(fiori3Dark) || isInlined(belize) || isInlined(belizeHcb)) {
	console.warn(`Inefficient bundling detected: consider bundling theme properties imports as URLs instead of inlining them.
See rollup-plugin-url or webpack file-loader for more information.
Suggested pattern: "assets\\\/.*\\\.json"`);
}
/* eslint-enable */

registerThemeProperties("@ui5/webcomponents-fiori", "sap_fiori_3", fiori3);
registerThemeProperties("@ui5/webcomponents-fiori", "sap_fiori_3_dark", fiori3Dark);
registerThemeProperties("@ui5/webcomponents-fiori", "sap_belize", belize);
registerThemeProperties("@ui5/webcomponents-fiori", "sap_belize_hcb", belizeHcb);
