import Editor from "./editor";
import { BrowserRouter as Router, Switch, Route, Redirect }  from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/editor/:docId">
            <Editor />
          </Route>
          <Route path="/" exact>
            <Redirect to={`/editor/${uuidV4()}`}></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
