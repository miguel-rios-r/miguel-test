import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavWrapper, Title } from '../theme/Styles'

const NotFound: React.FC = () => {
    return(
        <NavWrapper>
            <Title>NotFound</Title>
        </NavWrapper>
    )
}

export default NotFound