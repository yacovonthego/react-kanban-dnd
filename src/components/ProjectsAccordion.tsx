import * as React from 'react';
import ArrowIcon from '../assets/svg/ArrowIcon';
import List from './List';
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from './styled/Accordion.styled';

interface IAccordionProps {
  summaryText: string,
  projects: string[]
}

const ProjectsAccordion: React.FunctionComponent<IAccordionProps> = ({ summaryText, projects }) => {
  //TODO: make it work
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <StyledAccordion aria-expanded={isOpen}>
      <StyledAccordionSummary onClick={() => setIsOpen(isOpen => !isOpen)}>
        <ArrowIcon /> <span>{summaryText}</span>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        <ul>
          <List<string> items={projects} renderItem={(projectName) => <li>{projectName}</li>} />
        </ul>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};

export default ProjectsAccordion;
