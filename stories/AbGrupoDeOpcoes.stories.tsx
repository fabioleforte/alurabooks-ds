import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AbBotao, AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';

export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = args => (
  <AbGrupoOpcoes {...args} />
);

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'E-book',
      corpo: 'R$00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 2,
      titulo: 'Impresso',
      corpo: 'R$00,00',
      rodape: '.pdf, .epub, .mob',
    },
    {
      id: 3,
      titulo: 'Impresso + E-bbok',
      corpo: 'R$00,00',
      rodape: '.pdf, .epub, .mob',
    },
  ],
} as AbGrupoOpcoesProps;