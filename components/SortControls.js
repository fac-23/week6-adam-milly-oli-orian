export default function SortControls({ setSortOrder, sortOrder }) {
  return (
    <>
      <div>
        <h3>Sort by price:</h3>
        <input
          type="radio"
          id="default"
          name="priceSort"
          value="default"
          checked={sortOrder === "default"}
          onChange={(event) => setSortOrder(event.target.value)}
        ></input>
        <label for="default">unsorted</label>
      </div>

      <div>
        <input
          type="radio"
          id="highToLow"
          name="priceSort"
          value="highToLow"
          checked={sortOrder === "highToLow"}
          onChange={(event) => setSortOrder(event.target.value)}
        ></input>
        <label for="highToLow">high-to-low</label>
      </div>

      <div>
        <input
          type="radio"
          id="lowToHigh"
          name="priceSort"
          value="lowToHigh"
          checked={sortOrder === "lowToHigh"}
          onChange={(event) => setSortOrder(event.target.value)}
        ></input>
        <label for="lowToHigh">low-to-high</label>
      </div>
    </>
  );
}
