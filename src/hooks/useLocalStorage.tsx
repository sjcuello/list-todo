import React, { useState } from "react";
import { IItem } from "../interfaces/Item";

const mockArray: IItem[] = [
    {
        _id: 1312312,
        text: 'Este es el primer to-do',
        date: new Date(),
        done: false
    },
    {
        _id: 25345435,
        text: 'Este es el segundo to-do',
        date: new Date(),
        done: false
    },
    {
        _id: 3423423423,
        text: 'Este es el tercer to-do',
        date: new Date(),
        done: false
    },
    {
        _id: 4345345345,
        text: 'Este es el cuarto to-do',
        date: new Date(),
        done: false
    }
];

const useLocalStorage = (itemLocalStorage: string): [IItem[], (items: IItem[]) => void] => {

    const localStorageTodos = localStorage.getItem(itemLocalStorage);
    let parsedTodos: IItem[];
    if (!localStorageTodos) {
        localStorage.setItem(itemLocalStorage, JSON.stringify(mockArray))
        parsedTodos = mockArray;
    } else {
        parsedTodos = JSON.parse(localStorageTodos)
    }

    const [data, setData] = useState(parsedTodos)

    const saveTodos = (items: IItem[]) => {
        localStorage.setItem('TODOS_v1', JSON.stringify(items))
        setData(items);
    }
    return [data, saveTodos]
}

// TO-DO
// const addItem = (value: string) => {
//     const newItem: IItem = {
//       _id: getNewIndex(),
//       text: value,
//       date: new Date(),
//       done: false
//     }
    
//     setData(data => [...data, newItem])
//   }
export default useLocalStorage