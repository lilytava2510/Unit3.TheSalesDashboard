import { useState } from 'react'
import './App.css'
import SideBar from './Component/Sidebar'
import Heading from './Component/Heading'
import PrimaryDashboard from './Component/PrimaryDashboard'
import Box from '@mui/material/Box'

import mockTransactions from './Component/MockData.js'
import TransactionBar from './Component/Transactionbar'

function App() {

  return (
    <>
    <Box>
      <Heading /> 
      <SideBar />
     <PrimaryDashboard />
      <TransactionBar />
      </Box>

    </>
  )
}

{/* {mockTransactions.map((item,index) => (
  <div key={index}>
    <div>{item.txId}</div>
    <div>{item.user}</div>
    <div>{item.date}</div>
    <div>{item.cost}</div>
  </div>
))} */}
export default App
