"use client";
import { useState } from "react";
import Styles from "./data.module.css";
import Image from "next/image";

import Modal from "../modal/page";
export default function RenderData({ data }: any) {
  const [product, setProduct] = useState<any>();
  const [open, setOpen] = useState(false)

  const openModal = (item: any) => {
    setProduct(item)
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
    setProduct(null)
  }

  return (
    <div className="container">



      <div className={Styles.data}>
        {
          data.map((item: any) => (
            <div onClick={() => { openModal(item) }} key={item.id} className={Styles.box}>
              <img width={280} height={200} src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              {/* <p>{item.description}</p> */}
              <p>{item.category}</p>
              <p>{item.rate}</p>
              <p>{item.count}</p>

            </div>
          ))}
      </div>
      {open && (
      <Modal product={product} closeModal={closeModal} />
)}
    </div>
  );
}
