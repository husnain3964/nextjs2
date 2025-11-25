"use client";
import styles from "./dashboard.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import RenderData from "../datarendering/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAmazonPay } from "@fortawesome/free-brands-svg-icons";
interface Products {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}
export default function Dashboard() {
  const [data, setdata] = useState<Products[]>([]);
  const [loading, setloading] = useState<Boolean>(false);
  const searchParams = useSearchParams();

  const filter = searchParams.get("category") || "";

  const router = useRouter();

  const logout = () => {
    alert("successfully logout");
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  useEffect(() => {
    async function load() {
      try {
        setloading(true);
        const result = await fetch(
          `/api/products?category=${encodeURIComponent(filter)}`,
          {
            cache: "no-store",
          }
        );
        if (!result.ok) throw new Error("result is not ok");

        const json: Products[] = await result.json();

        setdata(json);
        setloading(false);
      } catch (error) {
        console.log(error);
        setdata([]);
      }
    }
    load();
  }, [filter]);

  return (
    <div className={styles.main}>
      <div className={styles.navber}>
        <Image
          className={styles.log}
          src="/logo.png"
          alt="Company Logo"
          width={200}
          height={120}
          priority
        />
<div className={styles.btn}>
        <button > 
          <FontAwesomeIcon icon={faCartArrowDown} />
        </button>
        <button > 
          <FontAwesomeIcon icon={faAmazonPay } />
        </button>
        <button onClick={logout}> 
          <FontAwesomeIcon icon={faRightFromBracket } />
        </button>
        </div>
      </div>

      <div className={styles.points}>
        <li onClick={() => router.push(`?category`)}>Store</li>
        <li
          onClick={() =>
            router.push(`?category=${encodeURIComponent("men's clothing")}`)
          }
        >
          Men's clothing
        </li>
        <li
          onClick={() =>
            router.push(`?category=${encodeURIComponent("women's clothing")}`)
          }
        >
          Women's clothing{" "}
        </li>
        <li onClick={() => router.push(`?category=jewelery`)}>Jewelery</li>
        <li onClick={() => router.push(`?category=electronics`)}>
          Electronics
        </li>
      </div>

      {loading ? (
        <div className={styles.wrapper}>
          <div className={styles.spinner}>loading for data</div>
        </div>
      ) : (
        <RenderData data={data} />
      )}
    </div>
  );
}
