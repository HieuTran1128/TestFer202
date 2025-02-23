import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>3. 
      {products.map(product => (
        <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor={product.id} >{product.name}</label>
        </div>
      ))}

      {selectedProducts.length > 0 && (
        <p style={{ marginTop: '20px', fontWeight: 'bold'}}>
          Bạn đã chọn các sản phẩm: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}
        </p>
      )}
    </div>
  );
}

export default ProductList;