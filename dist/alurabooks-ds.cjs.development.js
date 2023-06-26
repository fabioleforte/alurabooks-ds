'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject;
var BotaoEstizado = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  background: #eb9b00;\n  padding: 16px 32px;\n  border: 2px solid #eb9b00;\n  color: #fff;\n  cursor: pointer;\n  &:hover {\n    background: #b87900;\n    border: 2px solid #b87900;\n  }\n"])));
var AbBotao = function AbBotao() {
  return React.createElement(BotaoEstizado, null, "Clique aqui!");
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

exports.AbBotao = AbBotao;
exports.Thing = Thing;
//# sourceMappingURL=alurabooks-ds.cjs.development.js.map
