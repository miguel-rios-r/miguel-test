import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { NavWrapper, Title } from '../theme/Styles'

const Home: React.FC = () => {
    return(
        <u>
            <NavWrapper>
                <Title>Welcome to <a href='https://github.com/miguel-rios-r' target={'_blank'}>Miguel Rios R</a> Frontend Test</Title>
            </NavWrapper>
            <Outlet/>
        </u>
    )
}

export default Home