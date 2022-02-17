import React from "react";

export default function CategoryControls({ requiredTag, setRequiredTag }) {
  const [checkedState, setCheckedState] = React.useState(
    new Array(Object.keys(requiredTag).length).fill(false)
  );

  function manageCheckedState(position) {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    const unwantedItems = updatedCheckedState.map((ticked, index) => {
      let updatedObj = {};
      let key = Object.keys(requiredTag[index])[0];
      if (ticked) {
        updatedObj[key] = true;
      } else {
        updatedObj[key] = false;
      }
      return updatedObj;
    });

    setCheckedState(updatedCheckedState);
    console.log(unwantedItems);
    setRequiredTag(unwantedItems);
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
        name="nutAllergy"
        value="nutAllergy"
        checked={checkedState[1]}
        onChange={() => {
          manageCheckedState(1);
        }}
      ></input>
      <label htmlFor="nutAllergy">No Nuts</label>
      <input
        type="checkbox"
        name="glutenFree"
        value="glutenFree"
        checked={checkedState[2]}
        onChange={() => {
          manageCheckedState(2);
        }}
      ></input>
      <label htmlFor="glutenFree">Gluten Free</label>
      <input
        type="checkbox"
        name="dairyFree"
        value="dairyFree"
        checked={checkedState[3]}
        onChange={() => {
          manageCheckedState(3);
        }}
      ></input>
      <label htmlFor="dairyFree">Dairy Free</label>
    </>
  );
}
