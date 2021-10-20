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
      
        <div className='h-16 w-full flex justify-center space-x-16 border-b border-yellow-500 shadow-lg'>
          <Link to='/pageA' className="text-black text-3xl font-semibold hover:text-gray-500">Page A</Link>
          <Link to='/pageB' className="text-black text-3xl font-semibold hover:text-gray-500">Page B</Link>
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
