import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Box from "@mui/material/Box"
import {creatRoom} from '../socket/Socket'
import {useNavigate} from "react-router-dom"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"

const Home = () =>{
    const [id, setRoomId] = useState('');
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setRoomId(e.target.value);
    }
    const newRoom = () => {
        let temp = '';
        if(id === ''){
            creatRoom('noName');
            temp = 'noName';
        }else{
            creatRoom(id);
            temp = id;
        }
        navigate(`/sala/${temp}`)
    }

    return(
    <div>
        <Grid container spacing = {0.5}>
            <Grid container item xs={12} justify="center"   >
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off">
                        <TextField id = "roomId" 
                        label = "Nome da Sala" variant = "outlined" 
                        onChange ={handleChange} placeholder="Assista Junto"></TextField>
                </Box>
            </Grid>
            <Grid container item xs={12} justify="center" spacing= {2}>
                <Grid item>
                    <Button color="primary" variant="contained"
                        onClick={newRoom}> Entrar na Sala
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </div>
    )
}

export default Home