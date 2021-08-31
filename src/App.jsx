import './App.css';
import { BrowserRouter, Switch, Route , Link, Router } from 'react-router-dom';
import Nav from './Component/NavBar/Nav';
import Footer from './Component/Footer/footer';
import Slider from './Component/SlideCom/Slide';
import Right from './Component/SliderRight/Right';
import Left from './Component/SliderLeft/Left';
import FirstTop from './Component/FirstTop/FirstTop';
import SecondTop from './Component/SecondTop/SecondTop';
import GeneralGrid from './Component/GeneralGrid/GeneralGrid';
import { useEffect } from 'react';
import AppControlJs from './appjsControl';
import Writeup from './Component/WriteUp/writeup';
import ItemDetails from './Component/ItemDetails/itemDetails.jsx';

function App() {

  const { checkFromWindow, view } = AppControlJs(window);

  // window.addEventListener('resize', checkFromWindow);

  useEffect(() => {
    checkFromWindow();
  }, [])

  const pageNotFound = () => (
    <div>404! - <Link to ="">Back Home</Link></div>
  );

  return (
    <BrowserRouter>
      <div className="App_Wrapper">
      <Switch>
          <Route path="/" exact={true}>
          <div className="App">
              <Nav/>
              {/* <ItemDetails/> */}
              <FirstTop/>
              <SecondTop/>
              <GeneralGrid/>
              <Writeup/>
              {view}
              <Footer/>
            </div>
          </Route>
          <Route path="/display" component ={ItemDetails}/>
          <Route component={pageNotFound} />
          </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
