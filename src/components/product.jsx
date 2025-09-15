import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useCart}  from '../context/CartContext';
import CakeModal from './cakeModal';
function Product({ pro }) {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <>
     <div className="p-4 rounded shadow cursor-pointer hover:shadow-lg transition"
        onClick={() => setOpen(true)}>
    <div className="box-border p-[5px]">
      <NavLink to={`/product/${pro.id}`}>
        <img src={pro.thumbnail} alt={pro.title}/>
      </NavLink>
      <div className="mt-4">
        <NavLink to={`/product/${pro.id}`}>
          <h4 className="font-semibold">{pro.title}</h4>
        </NavLink>
        <p className="text-white-600 mt-2">${pro.price}</p>
       
      </div>
       <button onClick={() => {
    addToCart(pro);
    onClose();
  }} className="mt-2 px-4 py-2 bg-pink-500 text-white rounded">
          Add to cart
        </button>
    </div>
    </div>

     {open && (
        <CakeModal
          pro={pro}
          onClose={() => setOpen(false)}
          onAddToCart={() => addToCart(pro)}
        />
      )}
    </>
  );
}

export default Product
