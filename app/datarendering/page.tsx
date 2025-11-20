
"use client"
import  Styles  from "./data.module.css";
export default function RenderData({data}:any) {
    console.log(data.category);
    
    return(
<div className={Styles.data}>
    {
        data?.map((item:any)=>(
            <div key={item.id} className={Styles.box}>
 <h3   >{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.rate}</p>
          <p>{item.count}</p>
            </div>

        ))
    }
</div>
    )
}