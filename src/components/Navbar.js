import React from 'react'
import { NavLink } from 'react-router-dom'
import {useUser} from '../context/UserContext'

export const Navbar = () => {
	const {data} = useUser()


	return (
		<div className = "navbar navbar-dark navbar-expand-lg" style={{background: '#24292e'}}>
			<ul className = "navbar-nav">
				<li className = "nav-item">
					{data?.avatar_url ? <img src={data?.avatar_url} width="40" height="40" alt=""/> : ''}
				</li>
				<li className = "nav-item">
					<a className="nav-link disabled" style = {{fontSize: '1.2rem', color: '#eee'}} href='/' disabled>{data?.login}</a>
				</li>
				<li className = "nav-item" style={{marginLeft:'50px'}}>
					<NavLink to = "/terminals" className = "nav-link">Терминалы</NavLink>
				</li>
				<li className = "nav-item">
					<NavLink to = "/buyers" className = "nav-link">Покупатели</NavLink>
				</li>
			</ul>
		</div>
	)
}