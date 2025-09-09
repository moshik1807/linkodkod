import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/homePage';
import PostPage from './pages/postPage';
import Create from './pages/createPage';
import Layout from './components/application-layout/layout';
import SignupPage from './pages/signupPage';
function App() {

  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<SignupPage/>}></Route>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/postPage' element={<PostPage/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
