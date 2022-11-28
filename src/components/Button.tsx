import * as React from 'react';
import StyledButton, { ButtonIconPosition, TButtonTheme } from './styled/Button.styled';

interface IButtonProps {
  text: string
  beforeIcon?: JSX.Element
  afterIcon?: JSX.Element
  theme?: TButtonTheme
  onClick?: () => void
}

export const AddButtonTheme: TButtonTheme = {
  color: '#fff',
  bg: '#0094FF',
  iconPosition: ButtonIconPosition.left
}

export const DropDownButtonTheme: TButtonTheme = {
  iconPosition: ButtonIconPosition.right
}
//TODO: StyledButton = styled(Button)
const Button: React.FunctionComponent<IButtonProps> = ({ 
  text,
  beforeIcon,
  afterIcon,
  theme,
  onClick
 }) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick();
  }

  return (
    <StyledButton theme={theme} onClick={(e) => handleClick(e)}>
      <i>{beforeIcon}</i> <span>{text}</span> <i>{afterIcon}</i>
    </StyledButton>
  );
};

export default Button;
