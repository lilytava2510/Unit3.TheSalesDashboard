import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'


 const PrimaryDashboard = () => {
    const statistics = [{
        title: "Sales Obtained",
        stat: 431225,
        percentage: "21%"
    },
    {
        title: "New Clients",
        stat: 32441,
        percentage: "5%"
    },
    {
        title: "Traffic Received",
        stat: 1325134,
        percentage: "43%"
    },
  
]
  return (
   <Box 
   sx={{
    display:"flex",
    gap: "10px"
   }}
   >
        {statistics.map(({title,stat,percentage}, key) => {
        return (
            <Card key={key}>
        <CardContent>
        <Typography> {title}</Typography>
        </CardContent>
        <CardContent>
        <Typography> {stat}</Typography>
        </CardContent>
        <CardContent >
        <Typography> {percentage}</Typography>
        </CardContent>
        </Card>
      
            )
        })}
    </Box>
  )
}
export default PrimaryDashboard;