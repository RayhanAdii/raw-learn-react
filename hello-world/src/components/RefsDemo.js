import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null // cb stands for callback
      this.setCbRef = (element) =>{
            this.cbRef = element
      }
    }

    componentDidMount(){
        // Case 1: Focusing the input, jd kyk otomatis kita bisa ngisi kolom gitu pas buka browser
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        //Case 2: Callback ref
        if (this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    

  render() {
    return (
      <div>
        <input type='text' ref = {this.inputRef}></input>
        <input type='text' ref = {this.setCbRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
