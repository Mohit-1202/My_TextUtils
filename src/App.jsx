import './App.css'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type
      }
    )

  }
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = "grey"
      document.body.style.color = "white"
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setmode("light")
      document.body.style.background = "white"
      document.body.style.color = "#212529"
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-9">
        <Routes>
          <Route exact path="/" element= {<TextForm heading={"Enter Text to analayze"} mode={mode} />}>
        </Route>
      <Route exact path="/about" element={<About/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
