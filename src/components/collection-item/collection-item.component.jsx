import React from "react";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooter,
  NameContainer,
  PriceContainer,
  AddButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooter>
      <AddButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
