import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../styles/sidebar.scss'
const Sidebar = () => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className='nav-link h2' href='#' ><HomeIcon /><span> Оформить заказ</span></a>
                </li>
                <li className="nav-item">
                    <a className='nav-link h2' href='#' ><HomeIcon /><span> Отзывы</span></a>
                </li>
                <li className="nav-item">
                    <a className='nav-link h2' href='#' ><HomeIcon /><span> Товары</span></a>
                </li>
                <li className="nav-item">
                    <a className='nav-link h2' href='#' ><HomeIcon /><span> Заказы</span></a>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link h2' to='/' ><ShoppingCartIcon /><span> Главная</span></NavLink>
                </li>
            </ul>
        </div >
    )
}

export default Sidebar