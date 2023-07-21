import { Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AllWorkouts } from "./pages/AllWorkouts"
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path='/workouts' element={<AllWorkouts />}/>
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
