import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Error from './pages/Error'
import SharedLayout from './pages/SharedLayout'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

}

export default App;
