import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled, } from '@mui/material/styles';
import { Drawer, Box, ListItemIcon } from '@mui/material';
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
// import Image from 'next/image'

const routes = [
  { path: '/register', title: 'Create an Account' },
  { path: '/otp', title: 'Confirm OTP' },
  { path: '/delivery', title: 'Delivery Information' },
  { path: '/order', title: 'Order Information' },
]

const MuiListItem = styled(ListItem)({
      "&:hover": {
        backgroundColor: "transparent",
        color: "#FF9000"
      },
})

function DisplayDrawer({close}) {

  return (
    <>      
      <List sx={{ p: 1 , display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: {xs:240, md: 400 }}} >
        <Box sx={{ display: "flex", width: "inherit"}}>
          <Link passHref href='/' alt="futurelabs_logo">
            <ListItem>
              <ListItemIcon> 
              {/* <Image src='/images/' height="25" width="25" alt="futurelabs_logo" /> */}
              </ListItemIcon>
            </ListItem>
          </Link>
          <MuiListItem sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}} onClick={close}>
              <CloseIcon sx={{cursor: "pointer"}}/>
          </MuiListItem>
        </Box>
        {/* <Divider sx={{my:2}} /> */}
        {routes.map((item, index) => (
          <Link passHref href={item.path} key={index} alt={item.title}>
            <MuiListItem key={index} button>
              <ListItemText primary={item.title} />
            </MuiListItem>
          </Link>
        ))}
      </List>
    </>

  )
}

export default function DefaultDrawer(props) {
  return (
    <Drawer variant="temporary" anchor="right" open={props.open} onClose={props.close}>
      <DisplayDrawer close={props.close}/>
    </Drawer>
  );
}
