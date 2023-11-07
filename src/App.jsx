import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Layout from './Layout'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import ViewEmp from './ViewEmp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Layout />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/viewemp/:id' element={<ViewEmp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App


