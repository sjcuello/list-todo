import React, { useContext } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import { BoxModal, InputText } from './style';
import { useState } from 'react';
import { DataContext } from '../../contexts';
interface IAddItemModalProps {
  open: boolean,
  handleClose: any
}

const AddItemModal: React.FunctionComponent<IAddItemModalProps> = ({ open, handleClose }) => {
  const { addItem } = useContext(DataContext)
  const [value, setValue] = useState('');

  const addNewItem = () => {
    if(value){
      addItem(value);
      handleClose();
      setValue('');
    }
  }
  
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <InputText value={value} type='text' onChange={handleOnchange}></InputText>
        <Button variant="contained" onClick={() => addNewItem()}>Confirm</Button>
      </BoxModal>
    </Modal>
  );
};

export default AddItemModal;
