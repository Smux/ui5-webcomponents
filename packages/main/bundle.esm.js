import "@ui5/webcomponents-base/dist/features/calendar/Buddhist.js";
import "@ui5/webcomponents-base/dist/features/calendar/Islamic.js";
import "@ui5/webcomponents-base/dist/features/calendar/Japanese.js";
import "@ui5/webcomponents-base/dist/features/calendar/Persian.js";

// ESM bundle targets Edge + browsers with native support
import "@ui5/webcomponents-base/dist/features/browsersupport/Edge.js";

// Icons
import "@ui5/webcomponents-icons/dist/json-imports/Icons.js";

// asset helpers (needs correct json as url in rollup.config.js)
import "./dist/json-imports/Themes.js";
import "./dist/json-imports/i18n.js";
import "./dist/json-imports/LocaleData.js"

import "./dist/features/InputElementsFormSupport.js";
import "./dist/features/InputSuggestions.js";

import Badge from "./dist/Badge.js";
import BusyIndicator from "./dist/BusyIndicator.js";
import Button from "./dist/Button.js";
import CheckBox from "./dist/CheckBox.js";
import Card from "./dist/Card.js";
import DatePicker from "./dist/DatePicker.js";
import Dialog from "./dist/Dialog.js";
import Icon from "./dist/Icon.js";
import Input from "./dist/Input.js";
import Label from "./dist/Label.js";
import Link from "./dist/Link.js";
import Popover from "./dist/Popover.js";
import Panel from "./dist/Panel.js";
import RadioButton from "./dist/RadioButton.js";
import Select from "./dist/Select.js";
import Option from "./dist/Option.js";
import Switch from "./dist/Switch.js";
import MessageStrip from "./dist/MessageStrip.js";
import MultiComboBox from "./dist/MultiComboBox.js";
import TabContainer from "./dist/TabContainer.js";
import Tab from "./dist/Tab.js";
import TabSeparator from "./dist/TabSeparator.js";
import Table from "./dist/Table.js";
import TableColumn from "./dist/TableColumn.js";
import TableRow from "./dist/TableRow.js";
import TableCell from "./dist/TableCell.js";
import TextArea from "./dist/TextArea.js";
import Timeline from "./dist/Timeline.js";
import TimelineItem from "./dist/TimelineItem.js";
import Title from "./dist/Title.js";
import ToggleButton from "./dist/ToggleButton.js";

import List from "./dist/List.js";
import StandardListItem from "./dist/StandardListItem.js";
import CustomListItem from "./dist/CustomListItem.js";
import GroupHeaderListItem from "./dist/GroupHeaderListItem.js";


// used in test pages
import RenderScheduler from "@ui5/webcomponents-base/dist/RenderScheduler.js";
window.RenderScheduler = RenderScheduler;
import { isIE } from "@ui5/webcomponents-core/dist/sap/ui/Device.js";
window.isIE = isIE; // attached to the window object for testing purposes


// Note: keep in sync with rollup.config value for IIFE
import { getAnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";
import { getTheme, setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { setNoConflict } from "@ui5/webcomponents-base/dist/config/NoConflict.js";
import { getCompactSize } from "@ui5/webcomponents-base/dist/config/CompactSize.js";
import { getRTL } from "@ui5/webcomponents-base/dist/config/RTL.js";
import { getRegisteredNames as getIconNames } from  "@ui5/webcomponents-base/dist/SVGIconRegistry.js"
window["sap-ui-webcomponents-bundle"] = {
	configuration : {
		getAnimationMode,
		getTheme,
		setTheme,
		setNoConflict,
		getCompactSize,
		getRTL,
	},
	getIconNames,
};
