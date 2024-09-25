import React from 'react';
import { useProducts } from "./useProducts";

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
}

const ProductsComponent: React.FC = () => {
  
  const { products } = useProducts();
  
  return (
    <div>
      <ul data-testid="product-list">
        {products.map((item:Product) => (
          <li key={item.id} style={{ listStyle: 'none' }}>
            <div>
              <img src={item.image} width={80} height={120} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;