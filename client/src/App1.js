import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/appNavbar';
import GraphGenerateForm from './components/graphGenerateForm';

import { Provider } from 'react-redux';
import store from './store';

import GenerateChart from './components/generatedChart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AppNavbar />
      <GraphGenerateForm />
      <div className="container">
        
      </div>
      <GenerateChart />
    </div>
    </Provider>
    
  );
}

export default App;
