import React from 'react'
import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'

const Component = styled(Box)`
    margin-left:12%;
    line-height:0;
`
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const SubHeading = styled(Typography)`
   font-size: 9px;
   letter-spacing:0.05rem;
   font-weight:700;
   font-style: italic;
`
const PlusImg = styled('img')({
    width:10,
    height:10,
    marginLeft:3
})

const Custmbtn = styled(Box)`
 display:flex;
 align-items:center;

`


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
    <StyledHeader>
        <Toolbar style={{minHeight: 55}}>
           <Component>
               <img src={logoURL} alt="logo" style={{width: 75}}/>
               <Box style={{display: 'flex'}}>
                   <SubHeading>Explore <Box component="span" style={{color:`#FFE500`}}>Plus</Box></SubHeading>
               <PlusImg src={subURL} alt="plus" />
               </Box>
           </Component>
           <Search />
             <Custmbtn>
               <CustomButtons />
             </Custmbtn>
           
        </Toolbar>
    </StyledHeader>
  )
}

export default Header