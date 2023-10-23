//esto se exporta al archivo main.jsx
import Header from "./components/Header"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import { BrowserRouter } from "react-router-dom"
//export defoult funtion app () {
function App() {
  
  const nombre = "sofia"
  const customGreeting = "Es la mejor planner del mundo"

  if (nombre == "sofia") {
  return (
  < >
 <BrowserRouter>
  <NavBar/>
   <Header/>
   <Main/>
   <Footer/>
   </BrowserRouter>
  </>)
  } else {
}
return(

  <>
  <h1 className={"header-"+nombre}> Pone bien el nombre es horacio y no { nombre}</h1>
  <Footer></Footer>
  </>
)

}


export default App // puedo hacerlo asi, primero la funcion y despues export o puedo porner todo junto

