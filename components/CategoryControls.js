import React from "react";

export default function CategoryControls({ requiredTags, setRequiredTags }) {
  const [checkedState, setCheckedState] = React.useState(
    new Array(Object.keys(requiredTags).length).fill(false)
  );

  function manageCheckedState(position) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    const unwantedItems = updatedCheckedState.map((ticked, index) => {
      let updatedObj = {};
      let key = Object.keys(requiredTags[index])[0];
      if (ticked) {
        updatedObj[key] = true;
      } else {
        updatedObj[key] = false;
      }
      return updatedObj;
    });

    setCheckedState(updatedCheckedState);
    console.log(unwantedItems);
    setRequiredTags(unwantedItems);
  }

  return (
    <>
      <input
        type="checkbox"
        name="vegan"
        value="vegan"
        checked={checkedState[0]}
        onChange={() => {
          manageCheckedState(0);
        }}
      ></input>
      <label htmlFor="vegan">Vegan</label>
      <input
        type="checkbox"
        name="nutallergysafe"
        value="nutallergysafe"
        checked={checkedState[1]}
        onChange={() => {
          manageCheckedState(1);
        }}
      ></input>
      <label htmlFor="nutallergysafe">No Nuts</label>
      <input
        type="checkbox"
        name="glutenfree"
        value="glutenfree"
        checked={checkedState[2]}
        onChange={() => {
          manageCheckedState(2);
        }}
      ></input>
      <label htmlFor="glutenfree">Gluten Free</label>
      <input
        type="checkbox"
        name="dairyfree"
        value="dairyfree"
        checked={checkedState[3]}
        onChange={() => {
          manageCheckedState(3);
        }}
      ></input>
      <label htmlFor="dairyfree">Dairy Free</label>
    </>
  );
}
