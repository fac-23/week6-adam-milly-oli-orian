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
    basketItems = JSON.parse(localStorage.getItem("basket"));
  }

  return (
    <ul className={styles.basket}>
      <h1 className={styles.title}>Basket</h1>
      {!basketItems ? (
        <li className="flex-column">
          <p>Your basket is empty :( </p>
          <p>Go back and fill it with yummy cupcakes!</p>
          <Link href={"/"}>
            <a>⏎ Back to home</a>
          </Link>
        </li>
      ) : (
        basketItems.map(({ id, name, price, description, url }) => (
          <li className={styles.list} key={id}>
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
        ))
      )}
    </ul>
  );
}
