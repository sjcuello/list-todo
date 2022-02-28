import { Input } from '@mui/material'
import styled  from 'styled-components'

export const BoxModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transform: translate(-50%, -50%);
    width: 25vw;
    height: 50vh;
    background-color: white;
    border: 1px solid #000;
    box-shadow: 24px;
    border-radius: .5rem;
`
export const InputText = styled(Input)`
    margin-top: 3rem;
`