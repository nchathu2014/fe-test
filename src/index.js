/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import FeAssignment from './components/FeAssignment';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<FeAssignment/>,
  document.getElementById('app')
);
