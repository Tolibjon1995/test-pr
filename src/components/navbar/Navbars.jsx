import React from 'react'
import '../../styles/navbar.scss'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


const Navbars = () => {
    return (
        <>
            <div className='navs d-flex justify-content-between align-items-center'>
                <Link to='/' className='nav-link'>Logo</Link>
                <div className=' d-flex align-items-center'>
                    <IconButton aria-label="cart" className='me-5'>
                        <StyledBadge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </StyledBadge>
                    </IconButton>
                    <div className="lich d-flex align-items-center justify-content-center">
                        <p>Личный кабинет</p>
                        <div className="user">
                            <PersonIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbars