import React from "react";

import CollectionItemContainer from "../collection-item/collection-item.container";

import {
  CollectionPreviewContainer,
  Title,
  Preview
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title}</Title>
    <Preview>
      {items.slice(0, 4).map(item => (
        <CollectionItemContainer key={item.id} item={item} />
      ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
