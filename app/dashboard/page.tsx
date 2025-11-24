"use client"
import styles from "./dashboard.module.css"
import { useRouter, useSearchParams } from "next/navigation"
import dataFetching from "../getDataAsServerSide/page"
import RenderData from "../datarendering/page"
import { useEffect, useState } from "react"



interface Products {
    id: "number";
    title: "string";
    category: "string";
    price: "number";
    description: 'number';
    image: "string"
}
export default function Dashboard() {


    const [data, setdata] = useState<Products[]>([])

    const searchParams = useSearchParams()

    const filter = searchParams.get("category") || ""


    const router = useRouter()

    const logout = () => {
        alert("successfully logout")
        setTimeout(() => {
            router.push("/login")
        }, 2000);
    }




    useEffect(() => {
        async function load() {

            try {
                const result = await fetch(`/api/products?category=${encodeURIComponent(filter)}`, {
                    cache: "no-store"
                })

                const json: Products[] = await result.json()

                setdata(json)
            } catch (error) {
                console.log(error
                );
                setdata([])


            }

        }
        load()
    }, [filter]

    )

    return (
        <div className={styles.main}>
            <div className={styles.navber} >
                <h1 className={styles.logo} >dashboard</h1>
                <div className={styles.points}>
                    <li onClick={()=>router.push("?category=${enc}")} >men's clothing</li>
                    <li onClick={()=>router.push("?category=women's clothing")} >women's clothing</li>
                    <li  onClick={()=>router.push("?category=jewelery")}>jewelery</li>
                    <li   onClick={()=>router.push("?category=electronics")}>Electronics</li>
                </div>
            </div>


            <button onClick={logout} >logout</button>
            <RenderData data={data} />
        </div>
    )
}
