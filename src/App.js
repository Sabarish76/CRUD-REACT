import CreateTab from "./Components/CreateTab";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReadTab from "./Components/ReadTab";
function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/:index?" element={ <CreateTab></CreateTab>}>  </Route>
          <Route path="/read" element={<ReadTab></ReadTab>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
