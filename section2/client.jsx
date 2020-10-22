//기존 스크립트로 사용하던 것을 node에 모듈을 이용해서 불러온다.
import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import NumberBaseball from "./NumberBaseball_hooks";

const Hot = hot(NumberBaseball);
ReactDom.render(<Hot />, document.querySelector("#root"));
