import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import './Routing.css'
import { MdOutlineInventory } from 'react-icons/md'

import { useAuth } from '../../contexts/AuthContext'

export default function Navigation() {
    const { currentUser } = useAuth()

  return (
    <Navbar expand='md' className='p-3'>
        <Navbar.Brand id='nav' href='/'><MdOutlineInventory /> ReactJS ToDo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
        <Nav className='text-center'>
            {currentUser && 
            <>
                <Link to='/' className='nav-link' id='link'>
                    About
                </Link>
                <Link to='/todos' className='nav-link' id='link'>
                    To Do
                </Link> 
                <Link to='/categories' className='nav-link' id='link'>
                    Categories
                </Link>
            </>
            }

            {!currentUser &&
                <Link to='/login' className='nav-link' id='link'>
                    Login
                </Link>
            }

        </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}