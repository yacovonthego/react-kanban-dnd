import * as React from 'react';
import StyledFlex, { AIValues } from './styled/Flex.styled';
import StyledToolItem from './styled/ToolItem.styled';

export interface IToolItem {
  text: string
  icon: JSX.Element
  active?: boolean
}

const ToolItem: React.FunctionComponent<IToolItem> = ({
  text,
  icon,
  active = false
}) => {
  return (
    <StyledToolItem aria-checked={active}>
      <StyledFlex ai={AIValues.center}>
        {icon} <span>{text}</span>
      </StyledFlex>
    </StyledToolItem>
  );
};

export default ToolItem;
