import * as React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from "next/image"

function CustomTabPanel(props) {
    const { children, value, index, menu, id, ...other } = props;
    const categories = ['meal', 'snack', 'drink']
    const rows = [];
  menu.forEach((item, index) => {
    if(item.userId == id && categories[value] == item.category){
        rows.push(
            <Grid key={index} item md={3} xs={6} sx={{ marginBottom: '1rem' }}>
              {/* <Link href={item.url}> */}
                  <figure>
                    <Image src={item.img} layout="responsive" width="200" height="200" alt="avatar" />
                    <figcaption style={{ fontWeight: 700 }}>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography color="primary">N{item.price}</Typography>
                    </figcaption>
                  </figure>
              {/* </Link> */}
            </Grid>
          ) 
    }
  });
  return (
    <Grid container columnSpacing={1} marginTop="2rem">
      {rows}
    </Grid>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ menu, id }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, background: "#E8EDF1", borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Meals" />
          <Tab label="Snacks" />
          <Tab label="Drinks"  />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} menu={menu} id={id} />
    </Box>
  );
}
