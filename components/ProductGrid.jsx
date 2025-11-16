import React from 'react';

// Accept an array of items: [{ src: string, name?: string, price?: string }]
export default function ProductGrid({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div key={item.src || idx} className="card bg-base-100 shadow-xl">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.name || `Image ${idx + 1}`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name || `Image ${idx + 1}`}</h2>
            {item.price && <p>{item.price}</p>}
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
