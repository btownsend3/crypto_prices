import React from 'react'
import './css/Coin.css'
import {prettifyPrice, prettifyNumber} from './prettify'

function Coin({name, image, symbol, price, volume, priceChange, marketcap}) {

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <div className="coin-name-container">
            <h1 className="coin-name">{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>
        <div className="coin-data">
          <p className="coin-price">${prettifyPrice(price)}</p>
          <p className="coin-volume">${prettifyNumber(volume)}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
          }
          <p className="marketcap">${prettifyNumber(marketcap)}</p>
        </div>
      </div>
    </div>
  )
}

export default Coin
