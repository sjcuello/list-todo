import React, { useState } from 'react';
import { IItem } from '../../interfaces/Item';
import ItemTodo from '../ItemTodo';
import { CardContent, ItemContainer, Title } from './styles';
import Button from '@mui/material/Button';
import AddItemModal from '../AddItemModal';
import useLocalStorage from '../../hooks/useLocalStorage';
interface ICardProps {
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  // const {changeState} = useData();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, saveTodos] = useLocalStorage('TODOS_v1')
  
  const changeState = (_id: number): void => {
    const newData = data.map(item => {
      if(item._id === _id){
        item.done =  !item.done;
      }
      return item
    });
    saveTodos(newData)
  }

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
