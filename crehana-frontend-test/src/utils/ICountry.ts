export interface ICountry {
    name: String,
    code: String,
    currency: String,
    continent: IContinent
    languages: ILang[],
    capital: String,
    emoji: String
}

export interface IContinent {
    name: String
}

export interface ILang {
    name: String
}

export interface IEvent {
    target: IInputValue
}

export interface IInputValue {
    value: String
}

export interface ICurrency {
    currency: String
}