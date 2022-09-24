import React, {useState} from 'react'
import Product from './Product';


const App = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  const YOUR_APP_ID= "ba1fcac1";
const YOUR_APP_KEY = "653c4d01930d7574d4031df0e2ddd182";

  const submitHandler =e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=60&calories=591-600&health=alcohol-free`).then(
      response=> response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div class="food">
      
       <h3>DELICIOUS FOOD WORLD</h3>
       <h4>Make Your Choice</h4>
       <form onSubmit={submitHandler}>
         <input type="text" class="box" value={search} onChange={(e) =>setSearch(e.target.value)} /><br/><br/>
       <button className='btn btn-primary'><input type="submit" class="primary" value="Search"/></button> 
        </form>
        <div class="design">
        {data.length>=1 ? <Product data={data} />:null }
        </div>
    </div>
  )
}

export default App;

