import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria'


ReactDOM.render(

<BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route component={()=>(<div>Página 404</div>)}/>
  </ Switch>
</BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

