
import './App.css'
import NavBar from './component/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.css'
import Spotlight from './component/spotlight/Spotlight'
import Service from './component/Services/Service'
import ValueCore from './component/Values/ValueCore'
import Footer from './component/Footer/Footer'
import Associate from './component/Associations/Associate'

function App() {


  return (
    <>
      <NavBar/>
      <Spotlight/>
      <Service/>
      <ValueCore/>
      <Associate/>
      <Footer/>
    </>
  )
}

export default App
