import Nav from './views/Nav';
import Panel from './views/Panel';
import Main from './views/Main';
import NavBar from './views/NavBar';
import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <div class="row border">
        <div class="col"><NavBar /></div>
      </div>
      <div class="row gx-0">
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 border border-top-0"><Nav /></div>
        <div class="col"><Main /></div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 border border-top-0"><Panel /></div>
      </div>
      <div class="row border">
        <div class="col"></div>
      </div>
    </div>
  );
}

export default App;
