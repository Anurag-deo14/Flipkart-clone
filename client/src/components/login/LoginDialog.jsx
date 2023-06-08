
import {Dialog} from '@mui/material';

import React from 'react'

const LoginDialog = ({open,setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    }

  return (
    <Dialog open={open} onClose={handleClose}>
         Hello
    </Dialog>
  )
}

export default LoginDialog