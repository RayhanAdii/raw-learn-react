import React, { Component } from 'react'
import './App.css';
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA';
import LifecycleAUpdate from './components/LifecycleAUpdate';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className='App'>

      <Table/>

      {/*
        <FragmentDemo/>


        <LifecycleAUpdate/>

        <LifecycleA/>

         Habis belajar pengantar lifecycle method
        <Form></Form>
        */}
      </div>
    )
  }
}

export default App
