import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler' 
import ToggleCounter from './ToggleCounter'

// const data = [
//   {id: 1 , item: "Apples", quantity: 12, completed: false},
//   {id: 2 , item: "Eggs", quantity: 1, completed: true},
//   {id: 3 , item: "Chicken", quantity: 4, completed: false},
//   {id: 4 , item: "Carrots", quantity: 6, completed: true}
// ];

function App() {
     return (
        <div>

          <Counter />

          {/* <ToggleCounter /> */}

          {/* <Toggler /> */}

          {/* <Counter /> */}
          
          {/* <Clicker message="HI!!!" buttonText="Please Click Me"/>
          <Clicker message="Please Stop Clicking Me" buttonText="do not click"/> */}
        


          {/* <ShoppingList items={data} /> */}

          {/* <Heading color="magenta" text="Welcome!" fontSize="20px"/>
          <Heading color="teal" text="Blah!" fontSize="48px"/>

          <ColorList colors={["red", "pink", "purple", "teal" ]} />
          <ColorList colors={["Orange", "green", "blue", "yellow" ]} /> */}

          {/* <Greeter person="Bill" from="yatharth" />
          <Greeter person="Ted" from="yatharth" />
          <Greeter person="Rosa" from="yatharth" />

          <Die numSides={20} />
          <Die />
          <Die numSides={10} />

          <ListPicker values={[1,2,3,4,5]} />
          <ListPicker values={["a", "b", "c", "d"]} /> */}

          {/* <DoubleDice />
          <DoubleDice />
          <DoubleDice /> */}
        </div>
    )
}
  
export default App

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];