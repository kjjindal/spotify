import React from 'react';
import './Footer.css';
import {PlayCircleOutline,SkipPrevious,SkipNext,Shuffle,Repeat, VolumeDown, PlaylistPlay} from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core';


const Footer=()=>{
    return (
        <>
        <div className="footer">
        <div class="footer__left">
<img src="" alt="album"  className="footer__albumlogo" />
<div className="footer__songinfo">
<h4>lata</h4>
<p> ja ja .. </p>

</div>

        </div>
        <div className="footer__center">
        <Shuffle  className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline  className="footer__icon" fontSize="large" />
        <SkipNext  className="footer__icon"  />
        <Repeat className="footer__green" />

        </div>
        <div className="footer__right"> 

        <Grid container spacing={2} >
        <Grid item>
        <PlaylistPlay />

        </Grid>
        <Grid item>
        <VolumeDown />
            
        </Grid>
        <Grid item xs>
        <Slider />
            
        </Grid>

        </Grid>

        </div>

           
        </div>



        </>
    )
}



export default Footer ;