import React, { Component } from 'react';
import { render } from '@testing-library/react';


class App extends Component{
  constructor(props){
    super(props);
    
    // intial state of list 
    this.state={
      newItem:"",
      list:[]
    }

  }

  // assigns a key to an element
  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  // add item to the list
  addItem(){
    const newItem={
    // assigns a key to the value using random
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
    };

    // look up ... below not sure what it means
    const list = [...this.state.list];
    // add the item to the list
    list.push(newItem);
    
    this.setState({
      list,
      newItem:""
  });
  }

  deleteItem(id){
    // gets the current list
    const list = [...this.state.list];
    // removes the given id from the list
    const updatedList = list.filter(item => item.id !== id)
    // sets the current state of the list to modified one
    this.setState({list: updatedList});
  }

  render(){
    return(
      <div className="App">
        <div>
          Add an item...
          <br/>
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>
          Add
          </button>
          <br/>
          <ul>
          {this.state.list.map(item =>{
            return(
              <li key={item.id}>
                {item.value}
                <button
                onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>

              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
