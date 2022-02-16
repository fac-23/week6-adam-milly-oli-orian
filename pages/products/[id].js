import { getAllIds, getUniqueProduct } from "/database/model.js";
import Image from "next/image";

//nextJs calls getStaticPaths() AND getStaticProps() at build time (deployment)

//getStaticPaths tells nextJs what possible routes there are
//we provide an array of objects like this
//     params: {
//       id: '6'
//     }
//   }
// which tells nextJs how many routes to build at build time
// e.g. six objects in array would mean 6 routes id 1 - 6
export async function getStaticPaths() {
  const allIds = await getAllIds();

  const paths = allIds.map((obj) => {
    return {
      params: { id: String(obj.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

//getStaticProps collects the product information about a specific product
//by using the param id as argument in our model query called getUniqueProduct
//param.id is whatever goes after /products in the route e.g. /products/3, the param.id = 3
export async function getStaticProps({ params }) {
  //params.id comes from request params
  //this db query is run for each route ONCE at build time to make productData available as a prop
  const productData = await getUniqueProduct(params.id);
  return {
    props: {
      productData,
    },
  };
}

//Accepts productData from staticProps specific to a route
export default function Product({ productData }) {
  // use productData to build out visual image
  console.log(productData);
  const item = productData[0];
  return (
    <div>
      <li key={item.id}>
        <Image src={item.url} height={300} width={300} alt="cupcake" />
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button>Add to basket</button>
      </li>
    </div>
  );
}
