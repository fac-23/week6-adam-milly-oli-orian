import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductCards({
  allProductData,
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
