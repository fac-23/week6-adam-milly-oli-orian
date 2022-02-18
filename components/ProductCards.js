import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import { FaSolid, FaBasketShopping } from "react-icons/fa";

export default function ProductCards({
  allProductData,
  basket,
  setBasket,
  sortOrder,
  requiredTags,
}) {
  function compareNumbers(a, b) {
    switch (sortOrder) {
      case "highToLow":
        return b.price - a.price;
      case "lowToHigh":
        return a.price - b.price;
      case "default":
        return 0;
      default:
        return 0;
    }
  }

  function filterUnwanted(item) {
    const mergedRequirements = requiredTags.reduce(function (acc, x) {
      for (const key in x) acc[key] = x[key];
      return acc;
    }, {});

    //specific requirements
    let meetsRequirements = true;

    if (mergedRequirements.vegan && !item.vegan) {
      meetsRequirements = false;
    } else if (mergedRequirements.nutallergysafe && !item.nutallergysafe) {
      meetsRequirements = false;
    } else if (mergedRequirements.glutenfree && !item.glutenfree) {
      meetsRequirements = false;
    } else if (mergedRequirements.dairyfree && !item.dairyfree) {
      meetsRequirements = false;
    }

    if (meetsRequirements) {
      return item;
    }
  }

  return (
    <div className={styles.grid}>
      {allProductData
        .sort(compareNumbers)
        .filter(filterUnwanted)
        .map(({ id, name, price, description, url }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>
              <a>
                <Image
                  className={styles.productImage}
                  src={url}
                  height={300}
                  width={300}
                  alt="cupcake"
                />
              </a>
            </Link>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            <button
              aria-label={name}
              className={styles.btn}
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
                  // add new basket to local storage
                  window.localStorage.setItem(
                    "Basket",
                    JSON.stringify(newBasket)
                  );
                }
              }}
            >
              <Link href={"/basket"}>
                <a>Add to Basket</a>
              </Link>
              {/* <FontAwesomeIcon icon={"fa-solid fa-basket-shopping"} /> */}
            </button>
          </li>
        ))}
    </div>
  );
}
