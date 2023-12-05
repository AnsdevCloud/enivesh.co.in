import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/elements/Navbar"
import TermInsurance from "./pages/TermInsurance"


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/term_insurance" element={<TermInsurance />} />
      </Routes></>
  )
}

export default App
