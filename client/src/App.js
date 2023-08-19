import Nav from './views/Nav';
import Panel from './views/Panel';
import Main from './views/Main';
import NavBar from './views/NavBar';
import Footer from './views/Footer';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';

function App() {
  return (
    <div class="container-fluid">
      <div class="row border">
        <div class="col"><NavBar /></div>
      </div>
      <div class="row gx-0">
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 border-end border-start"><Nav /></div>
        <div class="col"><Main /></div>
        <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 border-end border-start"><Panel /></div>
      </div>
      <div class="row border">
        <div class="col"><Footer /></div>
      </div>
    </div>
  );
}

export default App;
