import React, {FC, useState}  from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from 'base'
import { IAuth } from 'types/types'
import './Home.scss'

type ICosts = {
  costThing: string;
  cost: number;
}

export const Home : FC<IAuth> = ({user, setUser}) => {

  const initialCosts : Array<ICosts> = [
    {
      costThing: 'toy',
      cost: 22
    },
    {
      costThing: 'boy',
      cost: 33
    }
  ]
  
  const [newCostThing, setNewCostThing] = useState('');
  const [newCost, setNewCost] = useState<number|void>();

  const [costs, setCosts] = useState(initialCosts);
  const navigate = useNavigate()
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/login')
  }
  const handleDeleteCostThing = (costThing:string) => {
    setCosts(costs.filter((item) => item.costThing !== costThing))
  }
  const handleAddCostThing = () => {
    if (newCostThing && newCost) {
      setCosts([...costs, {costThing: newCostThing, cost: newCost}]);
      setNewCostThing('');
      setNewCost();
    }
  }

  return (
    <section>
      <h2>Home of {user?.email}</h2>
      <ul className="view_spends">
        {costs.length ? 
        costs.map((item) => {
          return (
            <li key={`cost item ${item.costThing}`}>
              <span>{item.costThing} : {item.cost} m.u.</span>
              <button onClick={() => handleDeleteCostThing(item.costThing)}>Remove thing</button>
            </li>
          )
        })
        :
        <li><p>No spends for now! Add some!</p></li>}
        {}  
      </ul>
      <p>Total cost: {costs.reduce((acc, cur) => acc + cur.cost, 0)}</p>

      <div className="add_spends">
        <input type="text" 
        placeholder='Set your cost thing and it price' 
        onChange={(e) => {setNewCostThing(e.target.value)}}
        value={newCostThing}/>

        <input type="number" 
        onChange={(e) => {setNewCost(Number(e.target.value))}}
        value={newCost??''}/>
        <button onClick={handleAddCostThing}> Add cost thing</button>
      </div>

      <button onClick={handleSignOut}>Log out</button>
    </section>
  )
}
