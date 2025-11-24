"use client";
import styles from "./dashboard.module.css";
import { useRouter, useSearchParams } from "next/navigation";
// import dataFetching from "../getDataAsServerSide/page"
// import RenderData from "../datarendering/page";
import { useEffect, useState } from "react";
import RenderData from "../datarendering/page";

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
        <h1 className={styles.logo}>dashboard</h1>
        <div className={styles.points}>
          <li onClick={() => router.push(`?category`)}>all</li>
          <li
            onClick={() =>
              router.push(`?category=${encodeURIComponent("men's clothing")}`)
            }
          >
            men cloth
          </li>
          <li
            onClick={() =>
              router.push(`?category=${encodeURIComponent("women's clothing")}`)
            }
          >
            women cloth{" "}
          </li>
          <li onClick={() => router.push(`?category=jewelery`)}>jewelery</li>
          <li onClick={() => router.push(`?category=electronics`)}>
            Electronics
          </li>
        </div>
      </div>

      <button onClick={logout}>logout</button>

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
