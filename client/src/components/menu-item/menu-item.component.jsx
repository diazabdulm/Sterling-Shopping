import React from "react";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    isLarge={size === "large"}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <ContentContainer>
      <Title>{title}</Title>
      <Subtitle>Buy Now</Subtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItem;
