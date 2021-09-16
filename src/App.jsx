import './App.css';
import { BrowserRouter, Switch, Route, Link, Router } from 'react-router-dom';
import Nav from './Component/NavBar/Nav';
import Footer from './Component/Footer/footer';
import FirstTop from './Component/FirstTop/FirstTop';
import SecondTop from './Component/SecondTop/SecondTop';
import GeneralGrid from './Component/GeneralGrid/GeneralGrid';
import { useState , useEffect } from 'react';
import AppControlJs from './appjsControl';
import Writeup from './Component/WriteUp/writeup';
import ItemDetails from './Component/ItemDetails/itemDetails.jsx';
import DisplayCat from './Component/DisplaySelect/Display';
import  adminP from './Pages/AdminFol/admin';


function App() {

  const { checkFromWindow, view } = AppControlJs(window);
  const [useEffectTriggered,setTriggered] = useState(false);
  
   

  useEffect(() => {
    checkFromWindow();
    window.addEventListener("resize",checkFromWindow);
  }, [])

  const pageNotFound = () => (
    <div>404! - <Link to="/">Back Home</Link></div>
  );

  return (
    <BrowserRouter basename="/anodaworld">
      <div className="App_Wrapper">
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Nav/>
              <FirstTop/>
              <SecondTop/>
              <GeneralGrid/>
              <Writeup/>
              {view}
              <Footer/>
            </div>
          </Route>
          <Route path="/admin" component={adminP}/>
          <Route exact  path="/display" component={ItemDetails}/>
          <Route exact path="/category" component={DisplayCat}/>
          <Route exact component={pageNotFound}/>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
