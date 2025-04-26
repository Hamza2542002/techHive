import React from 'react'
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function UpdateItemQuantity({item}) {
  const { dispatch } = useCart();
  
    function handleUpdate(id, quantity) {
      console.log(id, quantity);
      dispatch({ type: "item/update", payload: { id, quantity } });
    }

  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      <FontAwesomeIcon icon={faMinus} onClick={()=> handleUpdate(item.id , -1)} 
        className='cursor-pointer rounded-full text-sm' 
        />
      <span className="font-medium text-lg w-4">{item.quantity}</span>
      <FontAwesomeIcon icon={faPlus} onClick={()=> handleUpdate(item.id , 1)}
        className='cursor-pointer rounded-full text-sm'/>
      <FontAwesomeIcon icon={faTrash}
        onClick={() =>
          dispatch({ type: "item/delete", payload: { id: item.id, price: item.price } })
        }
        className="ml-2 text-red-500 font-semibold hover:text-red-700 transition cursor-pointer"
      />
    </div>
  )
}
