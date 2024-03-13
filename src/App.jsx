import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InputForm from './InputForm';
import UserDetails from './UserDetails';
import './App.css'; 

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1>User Information</h1>
        <div className="forms-container">
          <InputForm />
          <UserDetails />
        </div>
      </div>
    </Provider>
  );
}

export default App;