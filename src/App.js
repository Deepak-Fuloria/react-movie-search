import Home from "./Home";
import {Routes,Route} from "react-router-dom"
import SingleMovie from "./SingleMovies";

function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="movie/:id" element={<SingleMovie/>}/>
     </Routes>
    </>
  );
}

export default App;
