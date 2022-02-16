import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductCards({ allProductData, sortOrder }) {
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
  return (
    <div className={styles.grid}>
      {allProductData
        .sort(compareNumbers)
        .map(({ id, name, price, description, url }) => (
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
