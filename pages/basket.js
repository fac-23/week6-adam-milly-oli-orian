// Create basket component
// Return li of every element in the basket
// onClick handler function needs to be added to Add to Basket button
//

import ProductCards from "../components/ProductCards";
import { useEffect } from "react";

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
  useEffect(() => {
    basketItems = JSON.parse(localStorage.getItem("Basket"));
    // return firstValue || "";
    console.log(basketItems);
  }, []);
  console.log("Basket", basketItems);
  //   return <ProductCards allProductData={allProductData} />;
  return <div>Hello</div>;
}
