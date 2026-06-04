
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar.js';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// export default class App extends Component {
const App =()=> {
  const PageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  // constructor(props) {
  //   super(props);
  //   state = {
  //     progress: 0,
  //     height: 3,
  //   };
  //}
  // const setProgress = (progress) => { // not needed for functional component as we can directly use setProgress function from useState hook
  //   setProgress(progress);
  //   //setState({ progress: progress })
  // };
 
   
    return (
      <div>
        <Router>
          <NavBar/>
           <LoadingBar
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={PageSize} country="us" category="general"/>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={PageSize} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={PageSize} country="us" category="entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={PageSize} country="us" category="general"/>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={PageSize} country="us" category="health"/>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={PageSize} country="us" category="science"/>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={PageSize} country="us" category="sports"/>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={PageSize} country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
}

export default App;
