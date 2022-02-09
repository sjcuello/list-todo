import styled  from 'styled-components'


export const CardContent = styled.div`
    background-color: white;
    width: 35vw;
    height: 80vh;
    border-radius: .5rem;
    box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.68);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 2rem 3rem;
`
export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 500;
    color: #111; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-weight: 700; 
    line-height: 4rem; 
    margin: 0 0 0; 
    padding: 20px 30px; 
    text-align: center; 
    text-transform: uppercase;
`

export const ItemContainer = styled.div`
    height: 100%;
    width: 100%;
`