"use client"
import { use, useState } from "react"
import styles from "./login.module.css"

import { useRouter } from "next/navigation"


export default function Login() {
    const router =useRouter()
    const [email, setemail] = useState<string>("")
    const [password, setpassword] = useState<string>("")


    function moveToDashboard(e: any) {
        e.preventDefault()
        if (email && password) {
            console.log(email, password)
            alert("happy login")
            setTimeout(() => {
                router.push("/dashboard")
            }, 1500);
        }
        else {
            alert("fill all requiremnts")

        }

    }
    return (

        <div className={styles.main}>
            <div className={styles.login}>
                <form action="" onSubmit={moveToDashboard} className={styles.form}>
                    <h1 className={styles.title}>login</h1>
                    <div className={styles.box} >
                        <label htmlFor="">email</label>
                        <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="abc@gmail.com" />

                    </div>
                      <div className={styles.box} >
                        <label htmlFor="">password</label>
                        <input onChange={(e) => setpassword(e.target.value)} type="password" name="" placeholder="password" id="" />

                    </div>  <button type="submit" className={styles.submit}>submit</button>
                </form>
            </div>
        </div>

    )
}