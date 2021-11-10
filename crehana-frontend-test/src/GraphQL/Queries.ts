import { gql } from '@apollo/client'

export const LOAD_COUNTRIES = gql`
    {
        countries {
            code
            name
            capital
            emoji
            currency
            continent{
                name
            }
        }
    }
`

export const LOAD_CONTINENTS = gql`
    {
        continents {
            name
            code
        }
    }
`

export const LOAD_CURRENCIES = gql`
    {
        countries {
            currency
        }
    }
`