import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import react from "react";

export default function ProductCards({ allProductData }) {
  const [basket, setBasket] = useState([]);
  return (
    <div className={styles.grid}>
      {allProductData.map(({ id, name, price, description, url }) => (
        <li key={id}>
          <Image src={url} height={300} width={300} alt="cupcake" />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button
            id={id}
            onClick={() => {
              if (typeof window !== "undefined") {
                setBasket((basket) => [...basket, id]);
                window.localStorage.setItem("Basket", basket);
              }
            }}
          >
            {console.log(id)}
            Add to basket
          </button>
        </li>
      ))}
    </div>
  );
}

// function addToBasket() {}
