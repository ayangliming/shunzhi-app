import React, { Component } from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dashboard.css'
import Feeditem from './Feeditem'

class Dashboard extends Component  {
  cards = [
    {username: 'Billie Zhang', comment: '真是好吃'},
    {username: 'Peter Wang', comment: '不错'},
    {username: 'Peter Wang', comment: '3星'},
  ]
  render() {
    const cardList = this.cards.map((c, index) => {
      return (
        <Feeditem key={index} username={c.username} comment={c.comment} />
      )
    })
    return(
      <div className="dashboard">
        <TitleHeader title="好友更新"/>
        <div className="feed-wrap">
          {cardList}
        </div>
      </div>
    )
  }
}

export default Dashboard
