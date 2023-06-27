// stories/AbTag.stories.tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbTag, AbTagProps } from '../src';

export default {
  title: 'Componentes/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Tag',
} as AbTagProps;
