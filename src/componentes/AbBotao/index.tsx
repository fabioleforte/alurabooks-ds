import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primario' | 'secundario';
  onclick?: () => void;
}

const BotaoEstizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primario' ? '#fff' : '#eb9b00'};
  cursor: pointer;

  ${(props: AbBotaoProps) =>
    props.tipo === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #ffff;
            border: 2px solid #b87900;
          }
        `}
`;

export const AbBotao = ({
  texto,
  tipo = 'primario',
  onclick,
}: AbBotaoProps) => {
  return (
    <BotaoEstizado onClick={onclick} tipo={tipo}>
      {texto}
    </BotaoEstizado>
  );
};
