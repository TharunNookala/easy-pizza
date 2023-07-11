import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItem, increaseItem } from './cartSlice';

const UpdateItemQuantity = ({pizzaId, currentQuantity}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-1 items-center md:gap-3'>
        <Button type='round' onClick={()=>dispatch(decreaseItem(pizzaId))}>-</Button>
        <span className='text-sm font-medium'>{currentQuantity}</span>
        <Button type='round'onClick={()=>dispatch(increaseItem(pizzaId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity