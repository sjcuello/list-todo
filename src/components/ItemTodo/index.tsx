import React, { useContext } from 'react';
import { IItem } from '../../interfaces/Item';

import { DataContext } from '../../contexts';
import { ItemContainer, Image } from './styles';
import { Typography } from '@mui/material';
import checked from '../../assets/icons/checked.png'
import notChecked from '../../assets/icons/not-checked.png'

interface IItemTodoProps {
  data: IItem;
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({ data }) => {
  const { changeState } = useContext(DataContext);
  
  return (
    <ItemContainer>
      <Image onClick={() => changeState(data._id)} src={data.done ? checked : notChecked} />
      <Typography paragraph={true} >{data.text}</Typography>
    </ItemContainer>
  );
};

export default ItemTodo;
