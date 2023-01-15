import React from 'react'
import "./assets/base.less"
import {Button} from 'antd'
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Button type="primary">Button</Button>
			<Outlet />
    </div>
  )
}
