import React, {useState, useEffect} from 'react';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        getFruits()

    }, [])

    const getFruits =async () => {
        await fetch('http://localhost:5000/products/fruits')
        .then((res)=> res.json())
        .then((fruits)=> {
          setFruits(fruits)
          console.log(fruits)
      })
      .catch(error=>{
        throw new Error(error)
      }) 
    }

    return(

        <div className='fruit'>
        <h2>All types of Fruits</h2>
        { 
            fruits.map((fruits) => 

            <div>

            <p>{fruits.name}</p>

         </div>
        
     )}

        </div>
    )
}
export default Fruits;