import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/homePage';
import PostPage from './pages/postPage';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/postPage' element={<PostPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
