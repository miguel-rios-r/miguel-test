import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICountry, ILang } from '../utils/ICountry';
import { NavWrapper, Title } from '../theme/Styles'
import { baseCountry } from '../utils/baseData';

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

    const [ country, setCountry ] = useState( baseCountry )

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
                                <b>Languages {'=====>'}</b> { country.languages.map( ( lang: ILang ) => <span>{lang.name} </span> )  }
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