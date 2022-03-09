import React, { useContext } from 'react';
import { IItem } from '../../interfaces/Item';

import { DataContext } from '../../contexts';
import { ItemContainer, Image } from './styles';
import { Typography } from '@mui/material';

interface IItemTodoProps {
  data: IItem;
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({ data }) => {
  const { changeState } = useContext(DataContext);
  return (
    <ItemContainer>
      <Image onClick={() => changeState(data._id)} src={data.done ? "../../assets/icons/checked.png" : "../../assets/icons/not-checked.png"} />
      <Typography paragraph={true} >{data.text}</Typography>
    </ItemContainer>
  );
};

export default ItemTodo;
