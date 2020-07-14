import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './components/header';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
