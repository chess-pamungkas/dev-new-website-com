import { useState } from 'react';

export const useModal = (initialShowState = false, hideOverflow = true) => {
  const [isShow, setIsShow] = useState(initialShowState);

  // const handleClick = event => {
  //   if (event) event.preventDefault();

  //   setIsShow(!isShow);
  // };

  const handleOpen = () => {
    if (hideOverflow) {
      document.body.classList.add('overflow-hidden');
    }

    setIsShow(true);
  };

  const handleClose = () => {
    document.body.classList.remove('overflow-hidden');
    setIsShow(false);
  };

  return {
    isShow,
    // handleClick,
    handleOpen,
    handleClose
  };
};
