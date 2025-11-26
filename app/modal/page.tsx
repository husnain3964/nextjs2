"use client"

import styles from "./modal.module.css";


export default  function  Modal({product , closeModal}:any){

    

return(
    <div className={styles.modal}>
        <button  onClick={closeModal}  className={styles.close}>X</button>
        <img  className={styles.image} src={product.image} alt="" />
        <h2 className={styles.title}>{product.title}</h2>
        <h1 className={styles.id}>{product.id}</h1>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.descrip}>{product.description}</p>
        <button className={styles.cart}>Add to cart</button>
    </div>
)

}