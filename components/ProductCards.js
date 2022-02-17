import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function ProductCards({ allProductData, basket, setBasket }) {
  return (
    <div className={styles.grid}>
      {allProductData.map(({ id, name, price, description, url: url }) => (
        <li key={id}>
          <Image src={url} height={300} width={300} alt="cupcake" />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button
            id={id}
            onClick={() => {
              if (typeof window !== "undefined") {
                setBasket((basket) => [
                  ...basket,
                  {
                    id: id,
                    name: name,
                    price: price,
                    description: description,
                    url: url,
                  },
                ]);
                window.localStorage.setItem("Basket", JSON.stringify(basket));
              }
            }}
          >
            Add to basket
          </button>
        </li>
      ))}
    </div>
  );
}

// function addToBasket() {}
