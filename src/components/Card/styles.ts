import { Box } from '@mui/system'
import styled  from 'styled-components'


export const CardContent = styled(Box)`
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
export const Title = styled(Box)`
    font-size: 2rem;
    font-weight: 600;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-weight: 700; 
    line-height: 4rem; 
    margin: 0 0 0; 
    padding: 10px 30px; 
    text-align: center; 
    text-transform: uppercase;
`

export const ItemContainer = styled(Box)`
    height: 100%;
    width: 100%;
    max-height: 80vh;
    overflow: scroll;
    margin-bottom: 1rem;
    border-radius: .5rem;
`