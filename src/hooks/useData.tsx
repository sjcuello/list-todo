import { useState } from 'react';
import { IItem } from '../interfaces/Item';

const mockArray: IItem[] = [
  {
    _id: 1,
    text: 'Este es el primer to-doEste es el primer to-doEste es el primer to-doEste es el primer to-doEste es el primer to-do',
    date: new Date(),
    done: false
  },
  {
    _id: 2,
    text: 'Este es el segundo to-do',
    date: new Date(),
    done: false
  },
  {
    _id: 3,
    text: 'Este es el tercer to-do',
    date: new Date(),
    done: false
  },
  {
    _id: 4,
    text: 'Este es el cuarto to-do',
    date: new Date(),
    done: false
  }
];

export const useData = () => {
  
  const [data, setData] = useState(mockArray);
  
  const getNewIndex = () => {
    return data.length + 1
  }

  const changeState = (_id: number): void => {
    const newData = data.map(item => {
      if(item._id === _id){
        item.done =  !item.done;
      }
      return item
    });
    setData(newData);
  }

  const getItem = (_id: number): IItem => {
    return data.find(item => item._id === _id)!
  }

  const addItem = (value: string) => {
    const newItem: IItem = {
      _id: getNewIndex(),
      text: value,
      date: new Date(),
      done: false
    }
    
    setData(data => [...data, newItem])
  }
  return { data, setData, changeState, getItem, addItem }
}

export default useData;