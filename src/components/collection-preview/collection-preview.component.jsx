import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

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
        <CollectionItem key={item.id} item={item} />
      ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
