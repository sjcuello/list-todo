import * as React from 'react';
import { IItem } from '../../interfaces/Item';

interface IItemTodoProps {
  data: IItem
}

const ItemTodo: React.FunctionComponent<IItemTodoProps> = ({data}) => {
  return (
      <>
        <p>{data.text}</p>
      </>
  );
};

export default ItemTodo;
