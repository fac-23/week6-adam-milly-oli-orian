import Image from "next/image";

export default function ProductCards({ allProductData }) {
  return (
    <div>
      {allProductData.map(({ id, name, price, description, url }) => (
        <li key={id}>
          <Image src={url} height={300} width={300} alt="cupcake" />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button>Add to basket</button>
        </li>
      ))}
    </div>
  );
}
