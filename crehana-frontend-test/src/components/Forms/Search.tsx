import React from "react"
import { ItemWrapper, MainInput } from "../../theme/Styles"
import FilterByContinent from "./Filters/FilterByContinent"
import FilterByCurrency from "./Filters/FilterByCurrency"

interface ISearch{
    searchChange: any,
    filterByContinent: any,
    filterByCurrency: any
}

function Search ( { searchChange, filterByContinent, filterByCurrency }: ISearch ) {

    return(
        <>
            <br/>
            <ItemWrapper>
                <MainInput placeholder='Type a country name or country code' onChange={ searchChange }/>
                <FilterByContinent  filterByContinent={ filterByContinent } />
                <FilterByCurrency filterByCurrency={ filterByCurrency }/>
            </ItemWrapper>
        </>
    )
}

export default Search