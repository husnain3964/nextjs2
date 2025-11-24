"use client";
import { useState } from "react";
import Styles from "./data.module.css";
import Image from "next/image";
import { log } from "console";
export default function RenderData({ data}: any) {
 
  
  return (
    <div className="container">
      
    
   
      <div className={Styles.data}>
        {
        data.map((item: any) => (
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
