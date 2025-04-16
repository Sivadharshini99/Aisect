
import { createContext, useState } from 'react';
import ConditionalRendering from './components/ConditionalRendering';
import Content from './components/content';
import Footer from './components/Footer';
import Header from './components/Header';


export let UserContext = createContext()//method from react library


function App() {
      
 let[user,setUser]= useState({uName:"Ramya",age:23,email:"ram12@gmail.com"})

  // console.log(userContext);
  
  return (
    <UserContext.Provider  value={{user}}>
    <>
    <div className='app'>   
    <Header />
    {/* user->key,{user object/value} */}
    <Content/>
    <Footer />
    </div>
    </>
    </UserContext.Provider>
  );
}

export default App
