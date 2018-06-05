import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Skilltree from './containers/Skilltree';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SkillReducer from './reducers/skill.js';

const store = createStore(
  SkillReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Skilltree />
  </Provider>,
  document.getElementById('root')
);
