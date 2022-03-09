import { Box, Typography } from '@mui/material'
import styled  from 'styled-components'


export const ItemContainer = styled(Box)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: .5rem;
    -webkit-box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.35); 
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.05);
`

export const Text = styled(Typography)`
    && {
        font-size: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const Image = styled.img`
    height: 3rem;
    width: 3rem;
`