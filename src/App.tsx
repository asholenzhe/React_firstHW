import './App.css';
import ExpenseTracker from "./components/ExpenseTracker";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
  return (
      <>
          <BrowserRouter>
              <Navigation/>
              <main>
                  <Routes>
                      <Route path="/calculate" element={<ExpenseTracker/>}/>
                      <Route path="/about" element={<About/>}/>
                  </Routes>
              </main>
          </BrowserRouter>
      </>
  )
}

export default App
