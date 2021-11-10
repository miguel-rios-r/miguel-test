import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { LOAD_COUNTRIES, LOAD_CURRENCIES } from '../../../GraphQL/Queries'
import { baseCurrencies } from "../../../utils/baseData"
import { ICurrency } from "../../../utils/ICountry"

interface IFilterByCurrency {
    filterByCurrency: any
}

function FilterByCurrency ( { filterByCurrency }: IFilterByCurrency ) {

    const { error, loading, data } = useQuery( LOAD_CURRENCIES )
    const [ allCurrencies, setCurrencies ] = useState( baseCurrencies )
    
    useEffect( () => {    
        if (!loading) {
            setCurrencies(data.countries)
        }
    }, [] )

    return(
        <>

            <br/>
            <label htmlFor="filter-by-currency">Filter by currency </label>
            <select label-id="filter-by-currency" onChange={ filterByCurrency }>
                <option value="all" key="all" selected>All</option>
                { allCurrencies.map( ( country: ICurrency ) => {
                    return(
                        <option value={country.currency.toLowerCase()} key={country.currency.toLowerCase()} >{country.currency}</option>
                    )
                }) }
            </select>

        </>
    )
}


export default FilterByCurrency