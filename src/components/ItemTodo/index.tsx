import React, { useContext } from 'react';
import { IItem } from '../../interfaces/Item';

import { DataContext } from '../../contexts';
import { ItemContainer, Text, Image } from './styles';

interface IItemTodoProps {
  data: IItem;
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({ data }) => {
  const { changeState } = useContext(DataContext);
  return (
    <ItemContainer>
      <Image onClick={() => changeState(data._id)} src={data.done ? "../../assets/icons/checked.png" : "../../assets/icons/not-checked.png"} />
      <Text>{data.text}</Text>
    </ItemContainer>
  );
};

export default ItemTodo;
