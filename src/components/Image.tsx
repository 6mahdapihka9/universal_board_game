import React, { useState } from 'react';
import { Box } from '@mui/material';

const Image = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  return (
    <Box>
      {selectedImage && (
        <>
          <img alt="your uploaded image" src={URL.createObjectURL(selectedImage)} />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </>
      )}

      <input
        type="file"
        name="myImage"
        onChange={onChangeImage}
      />
    </Box>
  );
};

export default Image;
