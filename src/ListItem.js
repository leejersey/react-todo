import React, { Component } from 'react'

class ListItem extends Component {
  render () {
    const item = this.props.item;
    const unfinish = {
			backgroundColor: '#DFFCB5',
			color: '#2EB872',
		};

		const finish = {
			backgroundColor: '#FFFA9D',
			color: '#FF9A3C',
			textDecoration: 'line-through'
    }
    
    var itemStyle = item.status === 0 ? unfinish : finish;

    return (
      <li key={item.id}>
        <span
          onClick={this.handleFinished}
          id={item.id}
          className="check-btn"
          style={{backgroundColor: item.status === 0 ? '#fff' : '#A1EAFB'}}
        ></span>
        <span>{item.name}</span>
        <span>删除</span>
      </li>
    )
  }
}

export default ListItem
