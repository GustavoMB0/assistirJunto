
import Home from './utils/pages/Home'
import YoutubeContainer from './utils/pages/YoutubeContainer'
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/sala/:id' element = {<YoutubeContainer/>}></Route>
      </Routes>
      </header>
    </div>
  );
}

export default App;
