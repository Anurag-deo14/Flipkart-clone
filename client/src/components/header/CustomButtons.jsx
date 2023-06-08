import { Box, Button, Typography,styled } from '@mui/material'
import React from 'react'
import {ShoppingCart} from '@mui/icons-material';
import { useState } from 'react';

import LoginDialog from '../login/LoginDialog';

const Wrapper =styled(Box)`
   display: flex;
   margin-left: 40px;

   & > button, & > p, & > div {
    margin-right: 40px;
    font-size: 16px;
   }
`
const Container = styled(Box)`
   display:flex;
`
const LogBtn = styled(Button)`
   color:#2874f0;
   background:white;
   text-transform: none;
   padding: 5px 30px;
   box-shadow:none;
   font-weight:600;
   border-radius:2px;
   height:32px;
`

const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  
  const openDialog = () => {
    setOpen(true);
  }

  return (
    <Wrapper>
       <LogBtn variant="contained" onClick={() => openDialog()}>Login</LogBtn>
       <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
       <Typography  style={{marginTop:3}}>More</Typography>

       <Container style={{marginTop:3}}>
       <Typography style={{paddingRight:6}}>Cart</Typography>
       <ShoppingCart/>
       </Container>
       <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons