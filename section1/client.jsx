//기존 스크립트로 사용하던 것을 node에 모듈을 이용해서 불러온다.
const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

const WordRelay = require("./WordRelay");

const Hot = hot(WordRelay);
ReactDom.render(<Hot />, document.querySelector("#root"));
