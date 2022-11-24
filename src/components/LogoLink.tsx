import StyledLogo from './styled/StyledLogo';

import * as React from 'react';

interface ILogoProps {
  renderLogoSvg: () => JSX.Element
}

const LogoLink: React.FunctionComponent<ILogoProps> = ({ renderLogoSvg }) => {
  return (
    <StyledLogo>
      {renderLogoSvg()}
      <a href="#"></a>
      {/* actually would use react-router Link instead of a */}
    </StyledLogo>
  );
};

export default LogoLink;
