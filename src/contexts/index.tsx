import * as React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

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

  return (
    <DataContext.Provider value={{
      data,
      saveTodos,
      changeState
    }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider }
