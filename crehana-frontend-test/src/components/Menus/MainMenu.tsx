import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, NavItem, Button, NavWrapper } from '../../theme/Styles'

interface IMainMenu {
    switchTheme: any,
    darkMode: boolean
}

function MainMenu({ switchTheme, darkMode }: IMainMenu) {

    return (
        <NavWrapper>
            <NavBar>
                <Link to="/" style={{textDecoration: 'none'}}> <NavItem>Home</NavItem> </Link>
                <Link to="countries" style={{textDecoration: 'none'}}> <NavItem>Countries</NavItem> </Link>
                <Button onClick={switchTheme}>Set {darkMode ? 'Light' : 'Dark'} mode</Button>
            </NavBar>
        </NavWrapper>
    )
}

export default MainMenu