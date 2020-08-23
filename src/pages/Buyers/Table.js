import React from 'react'
import { NavLink } from "react-router-dom";

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const test = <NavLink to="/profile">Test</NavLink>

  return {
    firstName: test,
    id_number: Math.floor(Math.random() * 30),
    normal_check: Math.floor(Math.random() * 500),
    item_value: Math.floor(Math.random() * 10),
    item_profit: Math.floor(Math.random() * 10000),
  };
};

export function makeData(len = 15) {
  return range(len).map(d => {
    return {
      ...newPerson()
    }
  })
}
