import React from 'react';

export interface CatalogItem {
  id: number;
  title: string;
  category: string;
  description: string;
}

interface Props {
  item: CatalogItem;
}

const CatalogItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.category}</h6>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default CatalogItemCard;