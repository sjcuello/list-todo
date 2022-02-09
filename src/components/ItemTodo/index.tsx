import * as React from 'react';
import { IItem } from '../../interfaces/Item';
import CheckButton from '../CheckButton';
import { ItemContainer, Text } from './styles';

interface IItemTodoProps {
  data: IItem;
  toggle: any;
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({data, toggle}) => {
  return (
      <ItemContainer>
        <CheckButton value={data.done} toggle={toggle(data._id)}/>
        <Text>{data.text}</Text>
      </ItemContainer>
  );
};

export default ItemTodo;
