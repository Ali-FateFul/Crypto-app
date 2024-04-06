import React from "react";

import TableRow from "./TableRow";

import { RotatingLines } from "react-loader-spinner";

import styles from "./TableCoin.module.css";

const TableCoins = ({ coins, isLoading , setChart, currency }) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3877ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Prise</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} currency={currency}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableCoins;
