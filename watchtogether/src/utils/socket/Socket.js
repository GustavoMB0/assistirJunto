import {io} from 'socket.io-client';

const socket = io();

export const pause = () => {
    socket.emit('pause');
};

export const play = () =>{
    socket.emit('play');
};

export const creatRoom = (id) => {
    socket.emit('creat', id);
};

export const playVideo = (videoId) => {
    socket.emit('video', videoId);
};

export const subscribetToVideo = (fun) => {
    socket.on('video', (videoId) => fun());
};

export const subscribeToPlay = (fun) => {
    socket.on('play', () => fun());
};

export const subscribeToPause = (fun) => {
    socket.on('pause', () => fun());
};

export const timeChange = (fun) =>{
    socket.on('client_fb', () => fun());
};
