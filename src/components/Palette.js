import React from 'react';
import ColorPalette from './ColorPalette';

export default function Palette (props){
    return (
     <section className="palette">
      <section className="info">
        <h2>{props.title}</h2>
          <h4>by {props.userName} at {props.dateCreated}</h4>
          <div>
            <span>{props.numViews} views</span>
            <span>{props.numVotes} votes</span>
          </div>
      </section>
      <ColorPalette colors={props.colors}/>
     </section>
    );
}
