import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { LOAD_CONTINENTS } from '../../GraphQL/Queries'
import { ItemWrapper, MainInput } from "../../theme/Styles"
import { baseContinets } from "../../utils/baseData"
import { IContinent } from "../../utils/ICountry"

interface ISearch{
    searchChange: any,
    filterByContinent: any
}

function Search ( { searchChange, filterByContinent }: ISearch ) {

    const { error, loading, data } = useQuery( LOAD_CONTINENTS )
    const [ allContinents, setContinents ] = useState( baseContinets )

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
                <select label-id="filter-by-continent" onChange={filterByContinent}>
                    <option value="all" key="all" selected>All</option>
                    { allContinents.map( ( continent:IContinent ) => {
                        return(
                            <option value={continent.name.toLocaleLowerCase()} key={continent.name.toLocaleLowerCase()} >{continent.name}</option>
                        )
                    }) }
                </select>
                
            </ItemWrapper>
        </>
    )
}

export default Search