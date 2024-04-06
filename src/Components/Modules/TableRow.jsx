import React from "react";

import chartDown from "../../assets/chart-down.svg";
import chartUp from "../../assets/chart-up.svg";

import styles from "./TableRow.module.css";
import { marketChart } from "../../Services/cryptoApi";

const TableRow = ({ coin, setChart, currency }) => {
  let locale = "";
  const {
    id,
    name,
    image,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;

  if (currency === "usd") {
    locale = "$";
  } else if (currency === "eur") {
    locale = "€";
  } else {
    locale = "¥";
  }
  const showHandler = async () => {
    try {
      const get = await fetch(marketChart(id));
      const json = await get.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr className={styles.row}>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {locale}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};

export default TableRow;
