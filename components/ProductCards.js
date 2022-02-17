import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductCards({ allProductData }) {
  return (
    <div className={styles.grid}>
      {allProductData.map(({ id, name, price, description, url }) => (
        <li key={id}>
          <Image className={styles.productImage} src={url} height={300} width={300} alt="cupcake" />
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button>Add to basket</button>
        </li>
      ))}
    </div>
  );
}
