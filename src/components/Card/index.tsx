import * as React from 'react';
import { IItem } from '../../interfaces/Item';
import CheckButton from '../CheckButton';
import ItemTodo from '../ItemTodo';
import { CardContent, ItemContainer, Title } from './styles';

interface ICardProps {
}

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

const changeState = (_id: number): void => {
  const index = mockArray.findIndex(item => item._id === _id);
  mockArray[index].done = !mockArray[index].done;
  console.log('_id :>> ', _id);
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
      <CardContent>
        <Title>Add your task</Title>
        <ItemContainer>
        {
          mockArray.length && 
          mockArray.map((item: IItem ) => {
            return <ItemTodo key={item._id} data={item} toggle={changeState}/>
          })
        }
        </ItemContainer> 
      </CardContent>
  );
};

export default Card;
