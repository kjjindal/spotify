// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#


//for local computer redirect uri
const redirectUri="http://localhost:3000/";

// this is for any computer or mobile redirect uri 

// const redirectUri="https://spotify-25461.web.app/";

export const authEndpoint="https://accounts.spotify.com/authorize";


const clientId="3935a3ce41eb4040a38a01ace85709c8";


const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

    
];

export const  getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=')
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial

    },{});

}

export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;







