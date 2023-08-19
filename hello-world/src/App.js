import React, { Component } from 'react'
import './App.css';
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA';
import LifecycleAUpdate from './components/LifecycleAUpdate';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRInput from './components/FRInput';
import FRParentInput from './components/FRParentInput';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <FRParentInput/>

      {/*
        <FocusInput/>


      <RefsDemo/>


        <ParentComp/>


      <Table/>


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
