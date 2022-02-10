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
  const [data, setData] = useState(mockArray)
  const changeState = (_id: number): void => {
    const dataCopy = data;
    const index = dataCopy.findIndex(item => item._id === _id);
    dataCopy[index].done = !dataCopy[index].done;
    setData(dataCopy);
    console.log('_id :>> ', _id);
  }
  const getItem = (_id: number): IItem => {
    return data.find(item => item._id === _id)!
  }
  return { data, setData, changeState, getItem }
}

export default useData;