import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import CreateCardForm from '../CreateCardForm/CreateCardForm';

const Board = () => {
  // eslint-disable-next-line no-unused-vars
  const [rule, setRule] = useState(null);

  const [isFormOpened, setIsFormOpened] = useState(false);

  const onToggleForm = () => {
    setIsFormOpened((prev) => !prev);
  };
  return (
    <div>
      <Box sx={{ position: 'relative' }}>
        <Button
          variant={isFormOpened ? 'outlined' : 'contained'}
          onClick={onToggleForm}
        >
          {isFormOpened ? 'cancel' : 'Add tile'}
        </Button>
        {isFormOpened && <CreateCardForm onClose={onToggleForm} />}
      </Box>
    </div>
  );
};

export default Board;
