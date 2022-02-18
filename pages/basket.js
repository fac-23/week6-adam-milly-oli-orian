// Create basket component
// Return li of every element in the basket
// onClick handler function needs to be added to Add to Basket button

// import ProductCards from "../components/ProductCards";
// import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

// export async function getServerSideProps() {
//   const basketCakes = await getBasket();
//   return {
//     props: { basketCakes },
//   };
// }

// Get basket items
// Pass them into ProductCards component
export default function Basket() {
  let basketItems = [];
  if (typeof window !== "undefined") {
    basketItems = JSON.parse(localStorage.getItem("Basket"));
  }
  console.log("basketItems", basketItems);

  return (
    <div className={styles.basket}>
      {basketItems.map(({ id, name, price, description, url }) => (
        <li key={id} className={styles.list}>
          <h1 className={styles.title}>Basket</h1>
          <Image
            className={styles.productImage}
            src={url}
            height={150}
            width={150}
            alt="cupcake"
          />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <Link href={"/"}>
            <a>⏎ Back to home</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
