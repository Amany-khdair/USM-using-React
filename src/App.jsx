import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Users from './pages/user/Users'
import User from './pages/user/User'
import AddUser from './pages/user/AddUser'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/users/add' element={<AddUser/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
