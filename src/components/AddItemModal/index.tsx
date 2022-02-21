import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Input, Button } from '@mui/material';
import { BoxModal } from './style';
import { useData } from '../../hooks/useData';
import { useState } from 'react';
interface IAddItemModalProps {
  open: boolean,
  handleClose: any
}

const AddItemModal: React.FunctionComponent<IAddItemModalProps> = ({open, handleClose}) => {
  const { addItem } = useData()

  const addNewItem = () => {
    addItem(value);
    handleClose();
  }

  const [value, setValue] = useState('')
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setValue(e.target.value);
 }
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <BoxModal>
      <Input value={value} type='text' onChange={handleOnchange}></Input>
      <Button variant="contained" onClick={() => addNewItem()}>Confirm</Button>
    </BoxModal>
  </Modal>
  );
};

export default AddItemModal;
