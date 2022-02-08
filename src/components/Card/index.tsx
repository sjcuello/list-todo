import * as React from 'react';
import { IItem } from '../../interfaces/Item';
import ItemTodo from '../ItemTodo';
import { CardContent, Title } from './styles';

interface ICardProps {
}

const mockArray: IItem[] = [
  {
    _id: 1,
    text: 'Este es el primer to-do',
    date: new Date(),
    done: false
  },
  {
    _id: 2,
    text: 'Este es el segundo to-do',
    date: new Date(),
    done: true
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
    done: true
  }
]

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
      <CardContent>
        <Title>Add your task</Title>
        {
          mockArray.length && 
          mockArray.map((item: IItem ) => {
            return <ItemTodo key={item._id} data={item}/>
          })
        }
      </CardContent>
  );
};

export default Card;
