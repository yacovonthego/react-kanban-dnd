import * as React from 'react';
import ArrowIcon from '../assets/svg/ArrowIcon';
import Button, { DropDownButtonTheme } from './Button';
import List from './List';
import StyledDropDown, { StyledDropDownContent, StyledDropDownItem } from './styled/DropDown.styled';

export type TDropDownItem = {
  text: string
  active?: boolean
}

interface IDropDownProps {
  items: TDropDownItem[]
}

const DropDown: React.FunctionComponent<IDropDownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(items.find(item => item.active) || items[0]);
  const dropDownRef = React.useRef<HTMLDivElement>(null);

  const handleDropDownItemClicked = (item: TDropDownItem) => {
    setActiveItem(item);
    setIsOpen(false);
  }

  const handleDropDownButtonClicked = () => {
    setIsOpen(true);
  }

  React.useEffect(() => {
    const handleClickOutsideDropDownContent = (e: MouseEvent) => {
      if (!dropDownRef.current?.contains(e.target as Node | null)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutsideDropDownContent)

    return () => {
      document.removeEventListener('click', handleClickOutsideDropDownContent)
    }
  })

  return (
    <StyledDropDown
      aria-checked={isOpen}
      ref={dropDownRef}
    >
      <Button
        text={activeItem.text}
        afterIcon={<ArrowIcon />}
        theme={DropDownButtonTheme}
        onClick={handleDropDownButtonClicked}
      />
      <StyledDropDownContent>
        <List
          <TDropDownItem>
          items={items}
          renderItem={(item) => (
            <StyledDropDownItem key={item.text} onClick={() => handleDropDownItemClicked(item)}>
              {item.text}
            </StyledDropDownItem>
          )}
        />
      </StyledDropDownContent>
    </StyledDropDown>
  );
};

export default DropDown;
