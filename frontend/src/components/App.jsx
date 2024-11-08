import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login  from './Login.jsx';
import Home  from './Home.jsx';
import Header from './Header.jsx';
import NotFound from './NotFound.jsx';

const App = () => {
  return (
    <>
    <Header />
    <div className='container-fluid h-100'>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App;