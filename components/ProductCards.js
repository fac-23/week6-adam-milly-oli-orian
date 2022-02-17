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
              // get access to local storage
              if (typeof window !== "undefined") {
                // create a new basket which takes the current basket state and adds a cupcake object
                const newBasket = [
                  ...basket,
                  {
                    id: id,
                    name: name,
                    price: price,
                    description: description,
                    url: url,
                  },
                ];
                // update react basket state to new basket
                setBasket(newBasket);
                console.log("newBasket", newBasket);
                // add new basket to local storage
                window.localStorage.setItem(
                  "Basket",
                  JSON.stringify(newBasket)
                );
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
