"use client"
import styles from "./dashboard.module.css"
import { useRouter } from "next/navigation"
import dataFetching from "../getDataAsServerSide/page"
import RenderData from "../datarendering/page"
import { useEffect, useState } from "react"


export default function Dashboard() {
const [data , setdata]=useState<any>([])
    const router = useRouter()
    const logout = () => {
        alert("successfully logout")
        setTimeout(() => {
            router.push("/login")
        }, 2000);
    }


    useEffect(()=>{
 async function load(){
    const res = await  dataFetching ()
    setdata(res)
    
 }
load()
    },[])

    return (
        <div  className={styles.main}>
            <div  className={styles.navber} >
                <h1  className={styles.logo} >dashboard</h1>
                <div   className={styles.points}>
                    <li>home</li>
                    <li>about</li>
                    <li>scroll</li> 
                     </div>
            </div>


            <button   onClick={logout} >logout</button>
            <RenderData data={data}/>
        </div>
    )
}
