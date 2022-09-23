import React, {useState, useEffect} from 'react';

const Veggies = () => {
    const [veggies, setVeggies] = useState([]);

    useEffect(() => {
        getVeggies()

    }, [])

    const getVeggies =async () => {
        await fetch('http://localhost:5000/products/vegetables')
        .then((res)=> res.json())
        .then((veggies)=> {
          setVeggies(veggies)
          console.log(veggies)
      })
      .catch(error=>{
        throw new Error(error)
      }) 
    }

    return(

        <div className='veggie'>
        <h2>All types of Vegetables</h2>

        { 
            veggies.map((veggies) => 

            <div>

            <p>{veggies.name}</p>
            
         </div>
            
     )}

        </div>

    )
}
export default Veggies;