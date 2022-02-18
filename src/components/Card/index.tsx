import React, { useState } from 'react';
import { IItem } from '../../interfaces/Item';
import ItemTodo from '../ItemTodo';
import { CardContent, ItemContainer, Title } from './styles';
import useData from '../../hooks/useData';
import Button from '@mui/material/Button';
import AddItemModal from '../AddItemModal';
interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const {data, changeState} = useData();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Button variant="contained" onClick={handleOpen}>Add your task</Button>
        <AddItemModal open={open}  handleClose={handleClose}/>
      </CardContent>
  );
};

export default Card;
