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
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className='App'>

      {/*Learn how to use Context */}
      <UserProvider value = "Rayhan">
        <ComponentC/>
      </UserProvider>



      {/*
      <CounterTwo 
        render={ (count, incrementCount)=> 
          <ClickCounterTwo count = {count} incrementCount = {incrementCount}></ClickCounterTwo>}/>

      <CounterTwo 
        render={ (count, incrementCount)=> 
          <HoverCounterTwo count = {count} incrementCount = {incrementCount}></HoverCounterTwo>}/>

      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render = {(isLoggedIn) => isLoggedIn ? 'Rayhan' : 'Guest'} />

      <ClickCounter/>
      <HoverCounter/>



      <ErrorBoundary>
        <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary>

      <PortalDemo/>
        <FRParentInput/>


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
