import React, { useContext } from "react";
import Pages from "./Pages";
import { SettingsContext } from "../../Context/Settings/Settings";

function List(props) {
  const setting = useContext(SettingsContext);

  // Calculate the start and end indices for items on the current page
  const startIndex = (setting.currentPage - 1) * setting.itemsPerPage; // Display 3 items per page
  const endIndex = startIndex + setting.itemsPerPage; // Display 3 items per page

  // // Get the items to display on the current page
  const itemsToDisplay = setting.list
    .filter((item) => !item.complete) // Filter out completed items
    .slice(startIndex, endIndex); // Get items for the current page

  return (
    <>
      {itemsToDisplay.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => setting.toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
      <Pages endIndex={endIndex}/>
    </>
  );
}

export default List;