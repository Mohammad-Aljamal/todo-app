import React, { useContext, useEffect, useState } from 'react'; ////
import List from '../List/List';
import useForm from '../../hooks/form.jsx';

import {SettingsContext} from '../../Context/Settings/Settings.jsx' ///
// import  {List}  from '../List/List.jsx';
const ToDo = () => {

  const setting = useContext(SettingsContext); ///

  const { handleChange, handleSubmit } = useForm(setting.addItem, setting.defaultValues);

  useEffect(() => {
    let incompleteCount = setting.list.filter(item => !item.complete).length;
    setting.setIncomplete(incompleteCount);
    // setList()
    document.title = `To Do List: ${setting.incomplete}`;
  }, [setting.list]);

  return (
    <>
      <header>
        <h1>To Do List: {setting.incomplete} items pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={setting.defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>

      <List/>
      
    </>
  );
};

export default ToDo;
