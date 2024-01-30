import React from 'react'
import Card from '../Card/Card'

interface Props {
    companyName: String;
    Ticker: String;
    Price: number;

}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card id={1} companyName={'Apple'} Ticker={'AAPL'} Price={100} />
      <Card id={2} companyName={'Apple'} Ticker={'AAPL'} Price={100} />
      <Card id={3} companyName={'Apple'} Ticker={'AAPL'} Price={100} />


        
    </div>
  )
}

export default CardList