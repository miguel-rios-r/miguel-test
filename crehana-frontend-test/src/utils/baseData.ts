import { IContinent, ICountry, ICurrency } from "./ICountry";

export const baseCountry: ICountry = {
    name: '',
    code: '',
    currency: '',
    continent: {name: ''},
    languages: [{name: 'ES'}],
    capital: '',
    emoji: ''
}

export const baseCountries: ICountry[] = [ baseCountry ]

export const baseContinets: IContinent[] = [ { name: "" } ]

export const baseCurrencies: ICurrency[] = [ { currency: "USD" }, { currency: "EUR" }, { currency: "TRY" } ]