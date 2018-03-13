import React from 'react'
import Card from './Card'

class Dealer extends React.Component {

  render() {
    const { dealer, dealerValue} = this.props
    let cards = dealer.map(card => <Card key={card.code} card={card} /> )

    return(
      <div className="dealerCards">
        <div className="dealerCardsValue">
          <h2>Dealer Value: {dealerValue} </h2>
        </div>
        <div className="dealerCardsImages">
          {cards}
        </div>
      </div>
    )
  }
}

export default Dealer
