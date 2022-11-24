import BordioLogo from '../assets/svg/BordioLogo';
import ProjectsAccordion from './ProjectsAccordion';
import LogoLink from './LogoLink';
import SearchBar from './SearchBar';
import StyledSideBar from './styled/Sidebar.styled';
import WorkSpace from './WorkSpace';

interface ISideBarProps {
}

const SideBar: React.FunctionComponent<ISideBarProps> = ({  }) => {
  return (
    <StyledSideBar>
      <LogoLink renderLogoSvg={() => <BordioLogo />} />
      <SearchBar />
      <WorkSpace />
      <ProjectsAccordion summaryText="Favorites" projects={['Marketing', 'Mobile App']} />
      <ProjectsAccordion summaryText="My Projects" projects={['Marketing', 'Landing Page', 'Wedding', 'Modbile App', 'House Construction']} />
    </StyledSideBar>
  );
};

export default SideBar;

