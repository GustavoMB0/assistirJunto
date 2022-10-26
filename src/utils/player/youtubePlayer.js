import React from 'react';
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import {play, 
    pause, 
    subscribeToPause,
    subscribeToPlay,
    timeChange} from "../socket/Socket";

import {YoutubePlayerWrapper,
    YoutubeFrameWrapper,
    Restart,
    } from "../styles/YoutubeContainer";

import YouTube from 'react-youtube';

const interval = 1500;

class YoutubePlayer extends React.Component {

    static propTypes = {
        vId: PropTypes.string.isRequired
    }

    constructor(prop){
        super(prop);
        this.vTime = undefined;
        this.vTimout = undefined;
        this.bState = false;
    }


    
    componentWillUnmount(){
        if (typeof this.videoTimeout !== 'undefined'){
            clearTimeout(this.videoTimeout);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.vId !== prevProps.vId){
            this.load();
        }
    }
    
    load = () => {
        const {vId} = this.props;
        let id = '';

        try{
            const temp = new URL
            const tempParam = temp.searchParams;

            if(!tempParam.has('v')){
                throw new Error('Video Id invalido');
            }

            id = tempParam.get('v');
        }catch(err){
            id = vId;
        }
        
        YouTube = new YouTube(`youtube-player-${vId}`, {
            id: vId,
            width: '100%',
            height: '100%',
            events: {
              onReady: this.onPlayerReady,
              onStateChange: this.handleSock
            }
        });
    }    

    onPlayerReady = (e) => {
        subscribeToPause(() => {
          this.player.pauseVideo();
        });
        subscribeToPlay(() => {
          this.player.playVideo();
    });

    timeChange((timestamp) => {
            this.blockStateSend = true;
            this.prevTime = timestamp;
            this.player.seekTo(timestamp);
            });
        setTimeout(this.trackPlayer, interval);
    };
    
    setTimestamp = (timestamp = 0) => {
        timeChange(timestamp);
    };
    
    handleRestart = () => {
        this.player.seekTo(0);
        this.prevTime = 0;
        this.setTimestamp();
    };


    render(){
        const vId = this.props;

        return vId ? (
            <YoutubePlayerWrapper>
                <div>
                    <Grid container justify="center">
                        <Grid item>
                            <YoutubeFrameWrapper>
                                <YouTube videoId= {vId} ></YouTube>
                            </YoutubeFrameWrapper>
                        </Grid>
                        <Grid item>
                            <Restart onClick={this.handleRestart}
                            color="secondary"
                            variant='contained'></Restart>
                        </Grid>
                    </Grid>
                </div>
            </YoutubePlayerWrapper>
        ) :null;
    } 
}

export default YoutubePlayer    