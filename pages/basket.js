// Create basket component
// Return li of every element in the basket
// onClick handler function needs to be added to Add to Basket button

// import ProductCards from "../components/ProductCards";
// import { useEffect } from "react";
import Image from "next/image";

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
    <div>
      {basketItems.map(({ id, name, price, description, url: url }) => (
        <li key={id}>
          <Image src={url} height={300} width={300} alt="cupcake" />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          {/* add onclick to delete element */}
          <button>Remove from basket</button>
        </li>
      ))}
    </div>
  );
}

// useEffect(() => {
//   let basketItems = [];
//   basketItems = JSON.parse(localStorage.getItem("Basket"));
//   // return firstValue || "";
//   console.log(basketItems);
// }, []);
