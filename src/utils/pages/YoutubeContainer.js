import React, {useState, useEffect} from 'react'
import Grid from "@mui/material/Grid";
import  youtubeIcon from "@mui/icons-material/YouTube"
import YoutubePlayer from "../player/youtubePlayer"
import {YoutubeHeader, 
    YoutubeID, 
    YoutubeSubmit} from "../styles/YoutubeContainer"

import {playVideo, subscribetToVideo} from "../socket/Socket"
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button"

const YoutubeContainer = ({state, dispatch}) => {
    const [videoId, setId] = useState('');
    const [vide, videoState] = useState('');

    useEffect(() => {
        subscribetToVideo((err, id) => {
          setId(id);
          videoState(id);
        });
      }, []);
    
    useEffect(() => {
        if (videoId === '') {
          videoState('');
        }
    }, [videoId]);
    
    const handleChange = (e) => {
        setId(e.target.value);
    };
    
    const handleClick = (e) => {
        videoState(videoId);
        if (videoId){
            playVideo(videoId);
        } 
    };

    return(
        <div>
            <Container>
                <YoutubeHeader>
                    Assista videos junto
                </YoutubeHeader>
                <Grid container>
                    <Grid item xs={20}>
                        <TextField id='video' label = 'Insira link do video'
                        value={videoId} onChange={handleChange}></TextField>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={20}>
                        <Button color="primary" variant="contained" onClick={handleClick}>
                            Play
                        </Button>
                    </Grid>
                </Grid>
              {<YoutubePlayer videoId={videoState}></YoutubePlayer >}
            </Container>
        </div>
    )
}

export default YoutubeContainer