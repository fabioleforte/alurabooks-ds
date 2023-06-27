import React, { useState } from 'react';
import styled, { css, styled as styled$1 } from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2, _templateObject3;
var BotaoEstizado = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  background: ", ";\n  padding: 16px 32px;\n  border: 2px solid #eb9b00;\n  color: ", ";\n  cursor: pointer;\n\n  ", "\n"])), function (props) {
  return props.tipo === 'primario' ? '#eb9b00' : '#fff';
}, function (props) {
  return props.tipo === 'primario' ? '#fff' : '#eb9b00';
}, function (props) {
  return props.tipo === 'primario' ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          &:hover {\n            background: #b87900;\n            border: 2px solid #b87900;\n          }\n        "]))) : css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n          &:hover {\n            background: #ffff;\n            border: 2px solid #b87900;\n          }\n        "])));
});
var AbBotao = function AbBotao(_ref) {
  var texto = _ref.texto,
    _ref$tipo = _ref.tipo,
    tipo = _ref$tipo === void 0 ? 'primario' : _ref$tipo,
    onclick = _ref.onclick;
  return React.createElement(BotaoEstizado, {
    onClick: onclick,
    tipo: tipo
  }, texto);
};

var _templateObject$1;
var SectionEstilizada = /*#__PURE__*/styled$1.section(_templateObject$1 || (_templateObject$1 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  width: 194px;\n  height: 88px;\n  background: ", ";\n  border: 1px solid;\n  border-color: ", ";\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  text-align: center;\n  margin: 10px;\n  font-family: sans-serif;\n  cursor: pointer;\n  header {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 400;\n  }\n  strong {\n    color: ", ";\n    font-size: 16px;\n    font-weight: 700;\n  }\n\n  footer {\n    color: ", ";\n\n    font-size: 12px;\n    font-weight: 600;\n  }\n"])), function (props) {
  return props.selecionado ? 'linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)' : '#fff';
}, function (props) {
  return props.selecionado ? '#002f52' : '#eb9b00';
}, function (props) {
  return props.selecionado ? '#fff' : '#eb9b00';
}, function (props) {
  return props.selecionado ? '#fff' : '#eb9b00';
}, function (props) {
  return props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.5)';
});
var AbGrupoOpcoes = function AbGrupoOpcoes(_ref) {
  var opcoes = _ref.opcoes,
    onChange = _ref.onChange,
    valorPadrao = _ref.valorPadrao;
  var _useState = useState(valorPadrao != null ? valorPadrao : null),
    selecao = _useState[0],
    setSelecao = _useState[1];
  var aoSelecionar = function aoSelecionar(opcao) {
    setSelecao(opcao);
    if (onChange) {
      onChange(opcao);
    }
  };
  return React.createElement(React.Fragment, null, opcoes.map(function (opcao) {
    return React.createElement(SectionEstilizada, {
      onClick: function onClick() {
        return aoSelecionar(opcao);
      },
      key: opcao.id,
      selecionado: (selecao == null ? void 0 : selecao.id) == opcao.id
    }, React.createElement("header", null, opcao.titulo), React.createElement("div", null, React.createElement("strong", null, opcao.corpo)), React.createElement("footer", null, opcao.rodape));
  }));
};

var _templateObject$2;
var TagStyled = /*#__PURE__*/styled.div(_templateObject$2 || (_templateObject$2 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding: 24px 32px;\n  color: #ffffff;\n  background: #eb9b00;\n  font-weight: 700;\n  font-size: 24px;\n  display: inline-block;\n  font-family: sans-serif;\n"])));
var AbTag = function AbTag(_ref) {
  var texto = _ref.texto;
  return React.createElement(TagStyled, null, texto);
};

var _templateObject$3;
var CardStyled = /*#__PURE__*/styled.div(_templateObject$3 || (_templateObject$3 = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  padding: 48px;\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n"])));
var Card = function Card(_ref) {
  var children = _ref.children;
  return React.createElement(CardStyled, null, children);
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

export { AbBotao, AbGrupoOpcoes, AbTag, Card, Thing };
//# sourceMappingURL=alurabooks-ds.esm.js.map
