import * as React from 'react';
import { IItem } from '../../interfaces/Item';

import { ItemContainer, Text, Image } from './styles';

interface IItemTodoProps {
  data: IItem;
  toggle: any;
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({data, toggle}) => {
  return (
      <ItemContainer>
        <Image onClick={() => toggle(data._id)} src={data.done ? "../../assets/icons/checked.png" : "../../assets/icons/not-checked.png"} />
        <Text>{data.text}</Text>
      </ItemContainer>
  );
};

export default ItemTodo;
