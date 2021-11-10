import styled  from 'styled-components'

export const AppWrapper = styled.div`
    padding: 1em;
    background-color: ${props => props.theme.paper};
`;

export const Title = styled.h1`
  font-size: 2em;
  margin: 0.3em;
  padding: 3em 0;
  text-decoration: none;
  color: ${props => props.theme.mainColor};
`;

export const Button = styled.button`
    border: solid 2px ${props => props.theme.mainColor};
    color: ${props => props.theme.mainColor};
    background: ${props => props.theme.secondaryColor};
    margin-left: 0.3em;
    padding: 0.5em;
    border-radius: 5px;
`

export const NavBar = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
`

export const NavWrapper = styled.div`
    width: 100%;
    text-decoration: none;
`;

export const NavItem = styled.p`
    margin: 0.3em;
    color: ${props => props.theme.mainColor};
`;

export const ContentWrapper = styled.div`
    margin-top: 4em;
    text-align: center;
`;

export const ItemWrapper = styled.div`
    padding: 2em;
    margin: 1em 5em;
    border-radius: 5px;
    text-align: left;
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
`;

export const MainInput = styled.input`
    padding: 1em;
    display: flex;
    width: 90%;
    border-radius: 5px;
    text-align: left;
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.secondaryColor};
`