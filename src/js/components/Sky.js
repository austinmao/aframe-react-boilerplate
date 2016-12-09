import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 10000}}
    material={{shader: 'flat', src: props.src}}
    scale="1 1 -1"/>
);
