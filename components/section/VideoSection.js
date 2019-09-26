import React from 'react';
import YouTube from 'react-youtube';
import { Div, Visible, Hidden } from '../layout';

const VideoSection = ({ id }) => (
  <Div align="middle" p={{ xs: '0 25px', sm: '0' }}>
    <Hidden sm md lg xl>
      <YouTube
        videoId={id}
        opts={{
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            modestbranding: 1
          }
        }}
      />
    </Hidden>
    <Visible sm md lg xl>
      <YouTube
        videoId={id}
        opts={{
          height: '390',
          width: '690',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            modestbranding: 1
          }
        }}
      />
    </Visible>
  </Div>
);

export default VideoSection;
