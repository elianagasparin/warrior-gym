import { Routes, Route } from "react-router-dom";
import { FrontPage } from "./pages/FrontPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AllWorkouts } from "./pages/AllWorkouts";
import { AllExercisesPage } from "./pages/AllExercisesPage";
import { LikePage } from "./pages/LikePage";
import { FavoritePage } from "./pages/FavoritePage";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<RegisterPage />} />
        <Route path='/workouts' element={<AllWorkouts />} />
        <Route path='/exercises' element={<AllExercisesPage />} />
        <Route path="/likes" element={<LikePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
