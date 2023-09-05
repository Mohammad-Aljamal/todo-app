import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

export const SettingsContext = React.createContext();

export default function Setting (props){
    const [hide, setHide] = useState (false);
    const [newList, setNewlist] = useState([]);////
    const [defaultValues] = useState({
        difficulty: 4,
    });
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [itemNum, setItemNum] = useState(0)

    const state = {
        hide: hide,
        newList: newList,
        defaultValues: defaultValues,
        list: list,
        incomplete: incomplete,
        currentPage:currentPage,
        itemsPerPage:itemsPerPage,
        itemNum:itemNum,
        setNewlist:setNewlist,
        setHide: setHide,
        setList: setList,
        setIncomplete: setIncomplete,
        addItem: addItem,
        deleteItem: deleteItem,
        toggleComplete: toggleComplete,
        setCurrentPage:setCurrentPage,
        setItemNum:setItemNum,
        setItemsPerPage:setItemsPerPage,
        
    }


    function addItem(item) {
        item.id = uuid();
        item.complete = false;
        console.log(item);
        setList([...list, item]);
        setItemNum(itemNum+1);
        item.num = itemNum;
      }
    
      function deleteItem(id) {
        const items = list.filter( item => item.id !== id );
        setList(items);
      }
    
      function toggleComplete(id) {
        const items = list.map( item => {
          if ( item.id == id ) {
            item.complete = ! item.complete;
          }
          return item;
        });
        setList(items);
      }

    return (
        <>
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
        </>
    )
}
