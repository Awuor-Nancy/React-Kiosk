import React, {useState, useEffect} from 'react';

const GetProducts = () => {
    const [product, setProduct] = useState([]);
    const[loading, setLoading] = useEffect(false)

    useEffect(() => {
        getProduct()

    }, [])

    const getProduct =async () => {
        await fetch('http://localhost:5000/products')
        
        .then((res)=> res.json())
        .then((product)=> {
         setProduct(product)
         setLoading(true) 
      })
      .catch(error=>{
        throw new Error(error)
      }) 
    }
    if(!loading){
      console.log('loading', loading)
      return <div>Loading ......</div>
    }

    return(

        <div className='main'>
        <h1>Check all our Products</h1>
        
        { 
            product.map((product) => 

            <div>

            <p>{product.name}</p>

         </div>
            
     )}

        </div>

    )
}
export default GetProducts;