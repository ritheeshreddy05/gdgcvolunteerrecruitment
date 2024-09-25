import React from 'react';

function ItemList({ items, addToCart }) {
    return (
        <div>
            <h2 className="mb-4">Items</h2>
            <div className="row">
                {items.map(item => (
                    <div key={item.id} className="col-6 col-sm-4 col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={item.image} alt={item.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">
                                    {item.description.length > 60 ? `${item.description.slice(0, 60)}...` : item.description}
                                </p>
                                <h6 className="card-subtitle mb-2 text-muted">Price: ${item.price.toFixed(2)}</h6>
                                <button onClick={() => addToCart(item)} className="btn btn-primary w-100">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;
