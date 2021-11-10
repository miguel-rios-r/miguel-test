import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link, 
    Outlet 
} from 'react-router-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { light, dark } from './theme'
import { AppWrapper } from './theme/Styles'

import MainMenu from './components/Menus/MainMenu'
import Countries from './screens/Countries'
import Home from './screens/Home'
import Country from './screens/Country'
import NotFound from './screens/NotFound'

// const errorLink = onError(({graphqlErrors, networkError}) => {
//     if ( graphqlErrors ) {
//         graphqlErrors.map( ({message: any, location: any, path: any}) => {
//             alert(`GraphQL error ${message}`)
//         } )
//     }
// })

const link = from([
    new HttpLink({uri: 'https://countries.trevorblades.com/'})
])

const graphqlClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

const App: React.FC = () => {

    const [darkMode, setDarkMode] = useState(false)

    const switchTheme = () => setDarkMode(!darkMode)

    return(
        <ApolloProvider client={ graphqlClient }>
            <ThemeProvider theme={darkMode ? dark : light }>
                <AppWrapper>
                    <Router>
                        <MainMenu switchTheme={switchTheme} darkMode={darkMode}/>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="countries" element={<Countries />}/>
                            <Route path="countries/:countryId" element={<Country />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </AppWrapper>
            </ThemeProvider>
        </ApolloProvider>
    )
}

// function CountryDetail(){
//     return(
//         <p>Detail</p>
//     )
// }

export default App