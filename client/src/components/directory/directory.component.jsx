import React from "react";

import MenuItemContainer from "../menu-item/menu-item.container";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItemContainer key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

export default Directory;
