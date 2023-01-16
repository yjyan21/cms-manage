import React from 'react'
import "./assets/base.less"
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      App
			<Outlet />
    </div>
  )
}
