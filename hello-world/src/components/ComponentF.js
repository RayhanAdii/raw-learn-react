import React, { Component } from 'react'
import { UserConsumer } from './userContext'

//Learn how to use Context

//UserProvider in App.js
// User COnsumer in desired component

class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (username) => {
                    return <div>Hello {username}</div>
                }
            }
        </UserConsumer>
    )
  }
}

export default ComponentF
