import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers'

ReactDOM.render(
  <Provider store={createStore(reducers)}><App /></Provider>,
  document.querySelector('#root')
  );



//src index, comp app, action, reducers, src index, songlist, connect mapstatetoprop,renderlist,semantic ui grid,
//action import in songlist,onclick, pass action creator to connect function dispatchs too,songdetail