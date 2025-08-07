import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import NewProduct from './components/NewProduct';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Productlist from './components/Productlist';
import Products from './components/Products';
import Signup from './components/Signup';
import TodoApp from './components/TodoApp';
import {BrowserRouter as Router,Routes,Route ,Link } from 'react-router-dom';



function App() {
  {/* <li><a href="/">Home</a></li>
  <li><a href="/products">products</a></li> */} 
  // <ol>
  //  <li><Link to='/'>Home</Link></li>
  //  <li><Link to='/products'>Products</Link></li>
  //  <li><Link to={`/login/${user}`}>Login</Link></li>
  //  <li><Link to='/signup'>Signup</Link></li>
  //  <li><Link to='/todoapp'>TodoApp</Link></li>
  // </ol>
  
  let user="siva";
  return (
    <div className='app'>   
     <Router>
     <NavBar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products/>}> {/* parentcompo */}
             {/* child compo */}
             <Route index element={<Productlist/>}/>
              <Route path='list' element={<Productlist/>}/>
              <Route path='details' element={<ProductDetails/>}/>
         </Route>
         <Route path='/login/:user' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/todoapp' element={<TodoApp/>}/>
         <Route path='/newProduct' element={<NewProduct/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
     </Router>
    </div>
    
  );
}

export default App
