


export default  async function dataFetching(){

 
       const  response =await  fetch("https://fakestoreapi.com/products",{
        cache:"no-store"
       })
          const data = await response.json()
          
           return data

       
} 