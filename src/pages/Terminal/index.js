import React, { useState } from 'react'
import './index.css'
import { TerminalTable } from '../../components/TerminalTable'



export const Terminal = () => {
  const [titleTerminal, setTitleTerminal] = useState('')
  const [descriptionTerminal, setDescriptionTerminal] = useState('')
  const [dataTerminal, setDataTerminal] = useState([
    {title: "Name", description: "Description", index: ""}
  ])

  const filterData = index => {
    setDataTerminal(dataTerminal.filter(v => index !== v.index))
  }

  
  const submitHandler = (e) => {
    e.preventDefault()

    const newList = dataTerminal.concat({ title:titleTerminal, description:descriptionTerminal});
    setDataTerminal(newList);
  } 

  return (
    <div>
      <div className = "form-terminal">
        <h1>Терминалы</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Название терминала</label>
            <input 
              type="text" 
              className="form-control" 
              maxLength="15" 
              value={titleTerminal} 
              onChange={e => setTitleTerminal(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Описание</label>
            <input 
              type="text" 
              className="form-control" 
              value={descriptionTerminal}
              onChange={e => setDescriptionTerminal(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary">Добавить</button>
        </form>
      </div>
      <div className = "table-terminal">
        <h1>Список терминалов</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col" style={{width: '25%'}}>Название Терминала</th>
              <th scope="col">Описание</th>
            </tr>
          </thead>
          {dataTerminal.map((value, key) => {
            return <TerminalTable filterData={filterData} value={value} key={key}/>
          })}
        </table>
      </div>
    </div>
  )
}