import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { LOAD_CONTINENTS } from '../../../GraphQL/Queries'
import { baseContinets } from "../../../utils/baseData"
import { IContinent } from "../../../utils/ICountry"

interface IFilterByContinent {
    filterByContinent: any
}

function FilterByContinent ( { filterByContinent }: IFilterByContinent ) {

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
            <label htmlFor="filter-by-continent">Filter by continent </label>
            <select label-id="filter-by-continent" onChange={filterByContinent}>
                <option value="all" key="all" selected>All</option>
                { allContinents.map( ( continent:IContinent ) => {
                    return(
                        <option value={continent.name.toLowerCase()} key={continent.name.toLowerCase()} >{continent.name}</option>
                    )
                }) }
            </select>

        </>
    )
}

export default FilterByContinent