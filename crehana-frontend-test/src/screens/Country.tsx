import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavWrapper, Title } from '../theme/Styles'

function Country( ) {
    let { countryId } = useParams();

    const { error, loading, data } = useQuery( gql`{
        country(code: "${countryId}") {
            name
            native
            capital
            emoji
            currency
            continent {
                name
            }
            languages {
                name
            }
        }
    }`)

    const [ country, setCountry ] = useState({
        name: '',
        code: '',
        currency: '',
        continent: {name: ''},
        languages: [{name: 'ES'}],
        capital: '',
        emoji: ''
    })

    useEffect( () => {
        console.log(data)
        if ( data ) {
            setCountry(data.country)
        }
    }, [data] )

    return (
        <>
            <NavWrapper>
                { loading ? <p>Loading...</p> : 
                    <div>
                        <Title> {country.emoji} {country.name}
                            <p style={{fontSize: '0.5em'}}>
                                <b>Country code {'====>'} </b> { countryId }
                                <br/>
                                <b>Capital {'========>'}</b> { country.capital }
                                <br/>
                                <b>Currency {'=======>'}</b> { country.currency }
                                <br/>
                                <b>Continent {'======>'}</b> { country.continent.name }
                                <br/>
                                <b>Languages {'=====>'}</b> { country.languages.map( (lang) => <span>{lang.name} </span> )  }
                                <br/>
                            </p>
                        </Title>
                    </div>
                }
            </NavWrapper>
        </>
    )
}

export default Country