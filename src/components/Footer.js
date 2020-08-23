import React from 'react'

export const Footer = () => {
  return (
    <footer 
      className="page-footer font-small dark" 
      style={{
        position:'fixed', 
        bottom:'0', 
        background: '#24292e', 
        width: '100%', 
        color:"#eee"
      }}
      >
      <div className="footer-copyright text-center py-3">
        Copyright © 2020 
      </div>
    </footer>
  )
}
