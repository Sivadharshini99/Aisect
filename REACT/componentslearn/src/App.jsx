
import Content from './components/content';
import Footer from './components/Footer';
import Header from './components/Header';




function App() {
      
  let user="siva";

  return (
    <>
    <div className='app'>
      
    <Header user={user}/>
    {/* user->key,{user object/value} */}
    <Content/>
    <Footer user="dharshu"/>
    </div>
    </>
  )
}

export default App
