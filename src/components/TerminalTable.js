import React from 'react'

export const TerminalTable = ({value, filterData}) => {
  let {title, description, index} = value
  return (
    <tbody>
      <tr>
        <th scope="row" >{title}</th>
        <td>
          <p>
            {description}
          </p>
          <span className="close" onClick={() => filterData(index)}>x</span>
        </td>
      </tr>
    </tbody>
  )
}
