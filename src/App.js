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
            hover:bg-blue-50 active:border-2 active:border-blue-500 active:border-solid
            focus:bg-blue-50 focus:text-blue-500">
              Spot
          </Link>
          <Link to='/pageB' className="text-white text-2xl font-semibold px-6 py-1 pb-2 rounded-xl 
            hover:bg-blue-50 active:border-2 active:border-blue-500 active:border-solid
            focus:bg-blue-50 focus:text-blue-500">
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
