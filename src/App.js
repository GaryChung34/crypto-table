import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect
} from "react-router-dom";

import PageA from './screens/pageA.js';
import PageB from './screens/pageB.js';


function App() {

  return (
    <Router>
      
        <div className='bg-lakeBlue h-16 w-screen flex justify-center items-center space-x-16 shadow-md'>
          
          <Link to='/pageA' className="text-white text-2xl font-semibold px-6 py-1 pb-2 rounded-xl 
            hover:border-b-2 hover:border-white hover:border-solid
            focus:bg-white focus:text-gray-700">
              Spot
          </Link>

          <Link to='/pageB' className="text-white text-2xl font-semibold px-6 py-1 pb-2 rounded-xl 
            hover:border-b-2 hover:border-white hover:border-solid
            focus:bg-white focus:text-gray-700">
              future
          </Link>
        </div>

        <Switch>
          <Route exact path='/pageA' component={PageA} />
          <Route exact path='/pageB' component={PageB} />
          <Redirect to='/pageA' />
        </Switch>
      
    </Router>
  );
}

export default App;
