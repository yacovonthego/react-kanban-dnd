import styled from 'styled-components';

export enum ButtonIconPosition {
  left = 'left',
  right = 'right'
}

export type TButtonTheme = {
  color?: string
  bg?: string
  iconPosition?: ButtonIconPosition
}

interface IStyledButtonProps {
  theme: TButtonTheme
}

const StyledButton = styled.button<IStyledButtonProps>`
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${({ theme: { bg = '#F5F8FA' } }) => bg};
  color: ${({ theme: { color = '#222' } }) => color};
  padding: 12px ${({ theme: { iconPosition } }) => iconPosition === ButtonIconPosition.right ? '44px' : '20px'} 12px ${({ theme: { iconPosition } }) => iconPosition === ButtonIconPosition.left ? '44px' : '20px'};
  border-radius: 50px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ theme: { iconPosition } }) => iconPosition === ButtonIconPosition.left ? '20px' : undefined};
    right: ${({ theme: { iconPosition } }) => iconPosition === ButtonIconPosition.right ? '14px' : undefined};
    width: 24px;
    height: 24px;
  }
`

export default StyledButton;