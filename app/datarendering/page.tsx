"use client";
import { useState } from "react";
import Styles from "./data.module.css";
import Image from "next/image";
import { log } from "console";
export default function RenderData({ data }: any) {
  console.log(data.category);
  const btn = ["JEwelery", "Electronics", "men's clothing", "all"];

  const [type, setType] = useState<string>("all");
  console.log(type);

  const filteredData = data?.filter((itm: any) => itm.category.toLowerCase() == type.toLowerCase());

  return (
    <div className="container">
      <div className={Styles.filter}>
        {btn.map((singleBtn: any) => (
          <li key={singleBtn} onClick={() => setType(singleBtn)}>
            {singleBtn}
          </li>
        ))}
      </div>

      <div className={Styles.data}>
        {(type=="all" ? data:filteredData).map((item: any) => (
          <div key={item.id} className={Styles.box}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.rate}</p>
            <p>{item.count}</p>
            <img  width={200} height={200}  src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
