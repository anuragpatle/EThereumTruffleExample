import { Navbar, Footer, Welcome, Services, Transactions, Loader } from "./components"

const App = () => {
  return (
   <div className="min-h-screen">
     <div className="gradient-bg-welcome">
       <Navbar/>
       <Welcome/>
     </div>
     <Services/>
     <Footer/>
   </div>
  )
}

export default App