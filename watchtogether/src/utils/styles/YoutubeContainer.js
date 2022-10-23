import React from 'react';
import styled from 'styled-components';
import  Container  from '@mui/material/Container'
import  TextField  from '@mui/material/TextField';
import  Button from "@mui/material/Button";
import Typhography from "@mui/material/Typography"

export const YoutubePlayerWrapper = styled(Container)`
    text-aling: center;
    margin: 0;
    max-width: 0;
    min-height: 50%;
`;

export const YoutubeID = styled(TextField)`
    &&{
        margin-top: 0.75em;
        font-family: inherit;

        &:hover{
            color: #c4302b;
        }
    }
`;

export const YoutubeSubmit = styled(Button)`
    &&{
        margin-top: 0.5em;
        padding: 0.5em;
        font-family: inherit;
        color: white;
        
        &:hover {
            background-color: black;
        }
    }
`;

export const YoutubeHeader = styled(()=>{
    <Typhography variant = 'h3'></Typhography>
})`
    margin: 0;
    padding: 0;
`;

export const YoutubePlayer = styled.div`
    margin-top: 0.5em;
`;


export const YoutubeFrameWrapper = styled.div`
    flota: none;
    clear: both;
    width: 100%;
    postion: relative;
    padding-top: 25px;
    height: 0%;

    frame{
        positon: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export const YotubeFrame = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
`

export const Restart = styled(Button)`
    padding: 0.5em;
    margin-top: 0.5em;
`