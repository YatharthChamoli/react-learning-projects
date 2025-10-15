import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({items}) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem 
          key = {i.id}
          item = {i.item}
          quantity = {i.quantity}
          completed = {i.completed}
        />
        
        // <ShoppingListItem key = {i.id} {...i}/>
      ))}
    </ul>
  )
}

export default ShoppingList;


// const data = [
//   {item: "Apples", quantity: 12, completed: false},
//   {item: "Eggs", quantity: 1, completed: true},
//   {item: "Chicken", quantity: 4, completed: false},
//   {item: "Carrots", quantity: 6, completed: true}
// ];