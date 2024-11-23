import Home from "./routes/home/home.component";

import {Routes, Route} from 'react-router-dom';

// import { Outlet } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/signin/signin.component";
import Shop from "./routes/shop/shop.component";
// const Shop = () => {

//   return (
//     <div>
//       <h1> Shop Page </h1>
//     </div>
//   )
// };
const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route>
      {/* <Home/> */}
    </Routes>
    
  )
}

export default App;
