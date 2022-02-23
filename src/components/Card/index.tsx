import React, { useContext, useState } from 'react';
import { IItem } from '../../interfaces/Item';
import ItemTodo from '../ItemTodo';
import { CardContent, ItemContainer, Title } from './styles';
import Button from '@mui/material/Button';
import AddItemModal from '../AddItemModal';
import { DataContext } from '../../contexts';
interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = useContext(DataContext);

  return (
    <CardContent>
      <Title>Add your task</Title>
      <ItemContainer>
        {
          data.length &&
          data.map((item: IItem) => {
            return <ItemTodo key={item._id} data={item} />
          })
        }
      </ItemContainer>
      <Button variant="contained" onClick={handleOpen}>Add your task</Button>
      <AddItemModal open={open} handleClose={handleClose} />
    </CardContent>
  );
};

export default Card;
