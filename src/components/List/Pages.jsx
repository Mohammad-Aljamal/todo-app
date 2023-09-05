// import React , {useContext}from "react";
// import { Pagination } from '@mantine/core';

// import {SettingsContext} from '../../Context/Settings/Settings';

// function Pages(props) {

//   const setting = useContext(SettingsContext); ///

//   return (

//     <div className="pagination">
//       <Pagination
//         itemsPerPage = {3}
//         page = {2}
//         withPagesCount
//         total={Math.ceil(setting.incomplete / 3)}
//         // color='red'

//         position="center"
//         styles={(theme) => ({
//           control: {
//             "&[data-active]": {
//               backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" }),
//               border: 0,
//             },
//           },
//         })}
//       />
//     </div>
//   );
// }

// export default Pages;

import React, { useContext, useEffect } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import "./page.scss";

// const itemsPerPage = 5; // Number of items to display per page

const Page = (props) => {
  // const [currentPage, setCurrentPage] = useState(1);
  const setting = useContext(SettingsContext);

  useEffect (() => {

  }, [setting.currentPage])
  // Sample list of items
  // const itemList = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  // Calculate the index range for items to display on the current page
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // const startIndex = (setting.currentPage - 1) * setting.itemsPerPage; // Display 3 items per page
  // const endIndex = startIndex + setting.itemsPerPage; // Display 3 items per page

  // Slice the itemList based on the current page
  // const displayedItems = itemList.slice(startIndex, endIndex);

  // const displayedItems = setting.list
  //   .filter((item) => !item.complete) // Filter out completed items
  //   .slice(startIndex, endIndex); // Get items for the current page

  const handlePageChange = (newPage) => {
    setting.setCurrentPage(newPage);
  };

  return (
    <div className="pages">
      <button
        onClick={() => handlePageChange(setting.currentPage - 1)}
        disabled={setting.currentPage === 1}
      >
        &lt;
      </button>
      <span>Page {setting.currentPage}</span>
      <button
        onClick={() => handlePageChange(setting.currentPage + 1)}
        disabled={props.endIndex >= setting.incomplete}
      >
        &gt;
      </button>
    </div>
  );
};

export default Page;
