import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from '../cart/DeleteItem';
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
    const dispatch = useDispatch();
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const currentQuantity = useSelector(getCurrentQuantityById(id));
    const isInCart = currentQuantity > 0;

    function handleAddtoCart(){
        const newItem = {
            pizzaId:id,
            name,
            quantity:1, 
            unitPrice,
            totalPrice : unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }

    return (
        <li className="flex gap-4 py-2">
            <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
            <div className="flex flex-col flex-grow">
                <p className="font-medium">{name}</p>
                <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? 
                    <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
                    (<p className="text-sm font-medium uppercase text-stone-600">Sold out</p>)}

                 {
                 isInCart && 
                 <div className="flex items-center gap-2 sm:gap-8">
                    <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
                    <DeleteItem pizzaId={id} /> 
                 </div>}

                    {!soldOut && !isInCart && <Button type='primary' onClick={handleAddtoCart}>Add to cart</Button>}
                </div>
            </div>
        </li>
    );
}

export default MenuItem;