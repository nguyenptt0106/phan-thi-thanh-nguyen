import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input";
import SelectBox from "./components/SelectBox";
import styles from "./CurrencyApp.module.scss";
import jsonData from "./data.json";

const currencies = jsonData.map((item) => {
  return {
    value: item.currency,
    label: item.currency,
    price: item.price,
  }
})

const CurrencySwap = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);
  const [result, setResult] = useState(null);

  const switchCurrency = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  useEffect(() => {
    console.log(fromCurrency, toCurrency)
  }, [fromCurrency, toCurrency]);

  const calculateResult = () => {
    const fromRate = fromCurrency.price;
    const toRate = toCurrency.price;
    const calculation = amount * (fromRate / toRate);
    console.log({fromRate, toRate, calculation});
    setResult(calculation);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.title}>
            <h3 className={styles.bold}>CURRENCY SWAP</h3>
            <p className={styles.description}>Enter the amount you want to exchange and select the currency you want to convert to.</p>
          </div>
          <div className={styles.currencyExchange}>
            <div className={styles.section}>
              <div className={styles.result}>
                <span>You send:</span>
                <Input
                  className={styles.input}
                  type={"number"}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}/>
              </div>
              <SelectBox
                options={currencies}
                value={fromCurrency}
                onChange={(option) => setFromCurrency(option)}
              />
            </div>
            <div className={styles.toggleCurrency}>
                <FontAwesomeIcon className={styles.icon} icon={faRepeat} onClick={switchCurrency}/>
            </div>
            <div className={styles.section}>
              <div className={styles.result}>
                <span>You get:</span>
                <span className={styles.number}>{Intl.NumberFormat('en-US').format(result)}</span>
              </div>
              <SelectBox
                options={currencies}
                value={toCurrency}
                onChange={(option) => setToCurrency(option)}
              />
            </div>
            <div className={styles.submit}>
              <button className={styles.btn} onClick={calculateResult}>SWAP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencySwap;
