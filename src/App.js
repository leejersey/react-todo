import React, { Component } from 'react'
import ListItem from './ListItem'
import Dialog from './dialog';

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state ={
      list:[
        {
          id:0,
          name:'吃饭',
          status:0
        },
        {
          id:1,
          name:'睡觉',
          status:0
        },
        {
          id:2,
          name:'看电影',
          status:0
        }
      ],
      finished:0
    };
  }

  addTask(){
    
  }

  render () {
    return (
      <div className="container">
        <h1>TodoList</h1>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <ListItem
                  item={item}
                  key={index}
                />
              )
            })
          }
          <li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
        </ul>
        <Dialog
          addNewTask={this.addTask.bind(this)}
          nums={this.state.list.length}
        />
      </div>
    )
  }
}

export default TodoList
