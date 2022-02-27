import * as React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { IItem } from '../interfaces/Item';

const DataContext = React.createContext<any>(null);

function DataProvider(props: any) {
  const [data, saveTodos] = useLocalStorage('TODOS_v1')

  const changeState = (_id: number): void => {
    const newData = data.map(item => {
      if (item._id === _id) {
        item.done = !item.done;
      }
      return item
    });
    saveTodos(newData)
  }

  const getNewIndex = () => {
    return data.length + 1
  }

  const addItem = (value: string) => {
    const newItem: IItem = {
      _id: getNewIndex(),
      text: value,
      date: new Date(),
      done: false
    }

    saveTodos([...data, newItem])
  }

  return (
    <DataContext.Provider value={{
      data,
      saveTodos,
      changeState,
      addItem
    }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider }
