import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('PURE COMPONENT RENDER')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp

/*
Pure Component implement shouldComponentUpdate with a "Shallow Prop" and "State Comparison"

Intinya ada kondisi dimana pure component tidak diupdate by default, tanya gpt aja nek lupa

Gunakan untuk menghindari unnecessary render dan boost performa
*/