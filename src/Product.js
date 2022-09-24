import React from "react";

const Product = ({data})=> {
    return (
        <div >
            <div class="main" >
                {data.map(data =>
                  <div>
                    <center>
                     <img class="card" src={data.recipe.image} alt="card image"/>
                     
                         <h5 class="card-title"> {data.recipe.label}</h5>
                            <p class="card-text">Amount:Rs {Math.round(data.recipe.calories)}(spl.Discount30%) </p>
                            <a href="#" class="primary">BUY</a>
                        </center>
                        
                  </div>  
                )}
    </div>            
</div>
    )
                }


export default Product