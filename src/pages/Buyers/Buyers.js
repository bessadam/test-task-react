import React, { useState } from 'react'
import { makeData } from "./Table";
import ReactTable from "react-table";
import "react-table/react-table.css";

export const Buyers = () => {
  const [data,] = useState(makeData())

  return (
    <div>
      <ReactTable
        data={data}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
          columns={[
          {
            Header: "Покупатели",
            columns: [
              {
                Header: "ID Покупателя",
                accessor: "id_number"
              },
              {
                Header: "Имя Покупателя",
                accessor: "firstName",
                filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value) &&
                  row[filter.id].endsWith(filter.value)
              },
              {
                Header: "Средний чек",
                accessor: "normal_check"
              },
              {
                Header: "Количество покупок",
                accessor: "item_value"
              },
              {
                Header: "Общая выручка",
                accessor: "item_profit"
              },
            ]
          },
        ]}
        defaultPageSize={5}
        className="-striped -highlight"
      />
      <br />
    </div>
  )
}

