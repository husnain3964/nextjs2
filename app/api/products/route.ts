import { json } from "stream/consumers";

export async function Get(request :Request){

const {searchParams} = new URL(request.url);

const category  =searchParams.get("category")

let url: string;
if (category && category !==""){
    url=`https://fakestoreapi.com/products/category/${category}`

}else {
    url =`https://fakestoreapi.com/products`
}

const res = await fetch(url, {
    cache:"no-store"
});


const data = res.json()

return   new Response (JSON.stringify(data))


}