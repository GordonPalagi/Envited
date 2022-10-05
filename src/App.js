import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Switch, Router, Route} from "react-router-dom";
import EventsPage from './components/EventsPage';
import CreatePage from './components/CreatePage';



function App() {
  return (

      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={LandingPage}/>
      //     <Route exact path="/events" component={EventsPage}/>
      //     <Route exact path="/create" component={CreatePage}/>
      //   </Switch>
      // </Router>

      <>
        <LandingPage/> 
        {/* <EventsPage/>
        <CreatePage/> */}
      </>

  )
}

export default App;
