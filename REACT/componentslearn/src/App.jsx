
import Footer from './components/Footer';
import Header from './components/Header';
import { Content } from './Content';


function App() {
      
  let user="siva";

  return (
    <>
    <Header user={user}/>
    {/* user->key,{user object/value} */}
    <Footer user="dharshu"/>
    <Content/>
    </>
  )
}

export default App
