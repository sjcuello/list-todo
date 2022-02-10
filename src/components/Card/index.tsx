import React from 'react';
import { IItem } from '../../interfaces/Item';
import ItemTodo from '../ItemTodo';
import { CardContent, ItemContainer, Title } from './styles';
import useData from '../../hooks/useData'
interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const {data, changeState} = useData();

  return (
      <CardContent>
        <Title>Add your task</Title>
        <ItemContainer>
        {
          data.length && 
          data.map((item: IItem ) => {
            return <ItemTodo key={item._id} data={item} toggle={changeState}/>
          })
        }
        </ItemContainer> 
      </CardContent>
  );
};

export default Card;
