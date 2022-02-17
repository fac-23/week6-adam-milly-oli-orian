import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function ProductCards({
  allProductData,
  sortOrder,
  requiredTag,
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
    const mergedRequirements = requiredTag.reduce(function (acc, x) {
      for (const key in x) acc[key] = x[key];
      return acc;
    }, {});

    const requirements = Object.keys(mergedRequirements);

    console.log("item", item);

    requirements.forEach((requirement) => {
      console.log("requirement", requirement);
      console.log(item[requirement]);
      console.log("gf", item.glutenfree);
    });
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
