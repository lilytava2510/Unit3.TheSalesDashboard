import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import mockTransactions from './MockData';
import Card from '@mui/material/Card'
import { Button } from '@mui/material';
import {  useGridApiRef } from '@mui/x-data-grid-pro'
import { useRef } from 'react';

function generate(element) {
    
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

 



  return (
    <Box sx={{  display:"flex", padding:"10px",
    gap: "10px", flexGrow: 1, maxWidth: 752, height:"300px" }}>
        <Card sx={{ overflow: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
         Recent Transactions
          </Typography>
     
            <List  dense={dense}>
              {mockTransactions.map((item,index) => (
                <ListItem  key={index} sx={{margin:"5px"}}  >
                    <Typography sx={{margin:"5px"}} >{item.user}</Typography>
                    <Typography sx={{margin:"5px"}} >{item.date}</Typography> 
                    <Typography sx={{margin:"5px", color:"teal" }} >{item.txId}</Typography> 
                    <Button sx={{backgroundColor:"beige", color:"teal"}}>{item.cost}</Button>
                  <ListItemText
                    />
                </ListItem>
                
               ))}
            </List>
       
        </Grid>
    </Grid>
    </Card>
    </Box>
  );
}
    
    {/* {mockTransactions.map((item,index) => (
 <div key={index}>
   <div>{item.txId}</div>
   <div>{item.user}</div>
   <div>{item.date}</div>
   <div>{item.cost}</div>
 </div>
))} */}