import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
cilTruck,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
  
  {
    component: CNavTitle,
    name: 'Tables',
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/dashboard/users',
      },
      {
        component: CNavItem,
        name: 'Add User',
        to: '/dashboard/adduser',
      },
    
    ],
  },
  {
    component: CNavGroup,
    name: 'Stations',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Stations',
        to: '/dashboard/stations',
      },
      {
        component: CNavItem,
        name: 'Add Station',
        to: '/dashboard/addstation',
      },
    
    ],
  },

]

export default _nav
