import $ from "jquery";

import "./fonts.css";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBacon, faAnchor } from "@fortawesome/free-solid-svg-icons";

import "bootstrap";
import "./index.scss";

const body = $("body");
const p = $(`<p></p>`).text("Inserindo Texto").css("color", "red");

body.append(p);

library.add(faBacon);
library.add(faAnchor);
dom.watch();
