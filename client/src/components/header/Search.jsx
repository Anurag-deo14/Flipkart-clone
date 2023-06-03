import React from 'react'
import { InputBase,Box,styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
    background:#fff;
    width:38%;
    border-radius: 2px;
    margin-left: 10px;
    display:flex;
`
const StyledHeader = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size: unset;
`
const SearchIco = styled(Box)`
    color: #2874f0;
    padding-top:5px;
    padding-right:10px;
`

const Search = () => {
  return (
    <Component> 
       <StyledHeader placeholder='Search for products, brands and more'/>
       <SearchIco>
            <SearchIcon />
       </SearchIco>
    </Component>
  )
}

export default Search