import React from 'react';

// Images served from the `public` folder. Spaces and apostrophes in folder names are URL-encoded.
const products = [
  { id: 1, name: 'Butter 20240521', price: '$10', image: "/Katie%20Bug%27s/butter/20240521_130607.jpg" },
  // ...add more images here as you place them in `public/Katie Bug's/...`
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 shadow-xl">
          <figure><img src={product.image} alt={product.name} /></figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            {product.price && <p>{product.price}</p>}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
