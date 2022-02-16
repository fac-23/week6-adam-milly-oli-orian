import { getAllIds, getUniqueProduct } from "/database/model.js";

//tells next js what possible routes there are
//provide array of objects like this
//     params: {
//       id: '6'
//     }
//   }
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //params.id comes from request params
  const postData = await getUniqueProduct(params.id);
  return {
    props: {
      productData,
    },
  };
}

export default function Product() {
  // use productData to build out visual image
  return <div></div>;
}
