import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ContentWrapper, NavWrapper, Title, ItemWrapper } from '../theme/Styles'
import { useQuery } from '@apollo/client'
import { LOAD_COUNTRIES } from '../GraphQL/Queries'
import Search from '../components/Forms/Search'

function Countries() {

    const { error, loading, data } = useQuery( LOAD_COUNTRIES )
    const [ allCountries, setCountries ] = useState([])

    useEffect( () => {
        if ( data ) {
            setCountries(data.countries)
        }
    }, [data] )

    const searchChange = ( e: any ) => {
        
        const countryToSearch: String = (e.target.value).toLowerCase();
        const results = data.countries.filter( (country:any) => countryToSearch === country['name'].toLowerCase() || countryToSearch === country['code'].toLowerCase() )
        
        if ( results.length > 0 ) {
            setCountries(results)
        } else {
            setCountries(data.countries)
        }

    }

    const filterByContinent = async ( e: any ) => {
        
        const continentToSearch = e.target.value
        
        if ( continentToSearch === "all" ) {
            setCountries(data.countries)
            return
        }

        const results = data.countries.filter( (country:any) => continentToSearch === country['continent']['name'] )
        
        setCountries(results)

    }

    return(
        <>
            <NavWrapper>
                <Title>Countries</Title>
            </NavWrapper>
            <Search searchChange={searchChange} filterByContinent={filterByContinent} />
            <Outlet/>
            <ContentWrapper>
                {   
                    loading ? <p>Loading...</p> :
                    allCountries.map( ( country: any  ) => {
                        return(
                            <ItemWrapper key={ country.code }>
                                <span style={{fontSize: 30}}>{country.emoji}</span>
                                <br/>
                                <strong>Name:</strong> { country.name } 
                                <br/> 
                                <strong>Capital:</strong> { country.capital } 
                                <br/> 
                                <strong>Continent:</strong> { country.continent.name }
                                <br/>
                                <Link to={ country.code } >Learn more</Link> 
                            </ItemWrapper>
                        )
                    })
                }
            </ContentWrapper>
        </>
    )
}

export default Countries