import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Image from 'next/image'
import Link from 'next/link'
import { styled, } from '@mui/material/styles';

const MuiIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "transparent",
    color: "#FF9000",
  },
})


export default function DefaultToolbar(props) {
  return (
    <Box sx={{ flexGrow: 1,}} >
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, paddingLeft: {md: "2rem", xs: ""}}}>
           <Link href="/">
            <Image src="/images/biite-b.png" height="80" width="100" alt="Biite" />
           </Link> 
          </Box>
          {/* <Stack sx={{ flexGrow: 0.1, height: "23px", width:"2px", color: "rgb(139, 139, 138)" }}></Stack> */}
          {/* <Divider variant="middle" sx={{ height: "23px", width:"10px", color: "white" }} orientation="vertical" /> */}
          <MuiIconButton
            size="small"
            edge="start"
            color="#023047"
            aria-label="menu"
            onClick={props.toggleDrawer} sx={{ mr: 2 , paddingX: '1.5rem', display: { xs: 'block', md: 'block' }, border: "solid #023047", borderRadius: '20px' }}
          >
            <AccountCircleOutlinedIcon fontSize='small' />
            <MenuIcon fontSize='small' sx={{ marginLeft: '.4rem' }}/>
          </MuiIconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}