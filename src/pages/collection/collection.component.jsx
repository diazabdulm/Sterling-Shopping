import React from "react";

import CollectionItemContainer from "../../components/collection-item/collection-item.container";

import {
  CollectionPageContainer,
  Title,
  ItemsContainer
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
