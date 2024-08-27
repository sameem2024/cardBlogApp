import Navbar from "./components/Navbar";
import Write from "./components/Write";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import SinglePage from "./pages/SinglePage";
import Music from "./components/Music";

import { Routes, Route } from "react-router-dom";
import { musicData, lifeData, sportsData, styleData, techData, moviesData } from "./data/data";
import { useContext } from "react";
import { context } from "./context/Global";



function App() {
  const {currentUser} = useContext(context);

  return (
    <>

      <Navbar />


      <Routes>

        <Route path='/' element={<HomePage />} />

        <Route path='/posts' element={<HomePage />} />

        <Route path='/register' element={<RegisterPage />} />

        <Route path='/login' element= {<LoginPage />} />

        <Route path='/post/:id' element={<SinglePage />} />

        <Route path='/write' element={currentUser ? <Write /> : <LoginPage />} />

        <Route path='/settings' element= {currentUser ? <SettingsPage /> : <LoginPage />}/>

        <Route path='/music' element={<Music category="Music" data={musicData} />} />
        <Route path='/life' element={<Music category="Life" data={lifeData} />} />
        <Route path='/movies' element={<Music category="Movies" data={moviesData} />} />
        <Route path='/sports' element={<Music category="Sports" data={sportsData} />} />
        <Route path='/style' element={<Music category="Style" data={styleData} />} />
        <Route path='/tech' element={<Music category="Technology" data={techData} />} />

      </Routes>



    </>
  );
}

export default App;





