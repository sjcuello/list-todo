import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { style } from './style';

interface IAddItemModalProps {
  open: boolean,
  handleClose: any
}

const AddItemModal: React.FunctionComponent<IAddItemModalProps> = ({open, handleClose}) => {

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <h1>modal text example</h1>
    </Box>
  </Modal>
  );
};

export default AddItemModal;
