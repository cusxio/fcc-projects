import * as types from '../constants/ActionTypes';
import axios from 'axios';

export let streamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'sing_sing', 'admiralbulldog', 'sheevergaming', 'dotagasm', 'aui_2000'];

export function setActiveTab (active) {
    return {
        type: types.SET_ACTIVE_TAB,
        active
    };
}
let offline = [];
let online = [];

export function twitchApiCall () {
    return (dispatch) => {
        return streamers.forEach((stream, index) => {
            axios.get(`https://api.twitch.tv/kraken/streams/${stream}`)
                .then(response => {
                    if (response.data.stream === null) {
                        axios.get(`https://api.twitch.tv/kraken/channels/${stream}`)
                            .then(responseOffline => {
                                offline.push({
                                    name: stream,
                                    link: `http://www.twitch.tv/${stream}`,
                                    logo: responseOffline.data.logo ? responseOffline.data.logo : 'http://placehold.it/300x300'
                                });
                                dispatch({
                                    type: types.TWITCH_OFFLINE,
                                    offline
                                });
                        });

                    } else {
                        online.push({
                            name: stream,
                            link: `http://www.twitch.tv/${stream}`,
                            logo: response.data.stream.channel.logo,
                            status: response.data.stream.channel.status
                        });
                        dispatch({
                            type: types.TWITCH_ONLINE,
                            online
                        });
                    }
                    if (index === streamers.length - 1) {
                        setTimeout(function doneCall () {
                            dispatch({
                                type: types.STATUS_DONE,
                                status: 'DONE'
                            });
                        }, 2000);
                    }
                });
        });
    };
}
