import BeforeSign from "./Components/BeforeSign";
import { Routes, Route } from 'react-router-dom';
import UserProfilePage from "./Components/UserProfilePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={BeforeSign} />
        <Route path="/profile" Component={UserProfilePage} />
      </Routes>
    </>
  )
}

export default App