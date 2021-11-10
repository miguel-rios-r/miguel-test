import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { LOAD_CONTINENTS } from '../../GraphQL/Queries'
import { ItemWrapper, MainInput } from "../../theme/Styles"

interface ISearch{
    searchChange: any,
    filterByContinent: any
}

function Search ( { searchChange, filterByContinent }: ISearch ) {

    const { error, loading, data } = useQuery( LOAD_CONTINENTS )
    const [ allContinents, setContinents ] = useState([])

    useEffect( () => {
        if ( data ) {
            setContinents(data.continents)
        }
    }, [data] )

    return(
        <>
            <br/>
            <ItemWrapper>
                <MainInput placeholder='Type a country name or country code' onChange={searchChange}/>
                <br/>
                <label htmlFor="filter-by-continent">Filter by continent </label>
                <select label-id="filter-by-continent" onClick={filterByContinent}>
                    <option value="all" key="all" selected>All</option>
                    { allContinents.map(  continent => {
                        return(
                            <option value={continent['name']} key={continent['code']} >{continent['name']}</option>
                        )
                    }) }
                </select>
                
            </ItemWrapper>
        </>
    )
}

export default Search