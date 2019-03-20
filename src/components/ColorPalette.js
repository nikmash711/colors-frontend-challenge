import React, { Component } from 'react';
import '../styles/colorpalette.css'

export default class ColorPalette extends Component {
  generateColorPalette(){
    return this.props.colors.map((color, index)=>{
      return (
        <div 
          key={index}
          className='color-strip' 
          style={{backgroundColor: `#${color}`}}>
        </div>
      )
    })
  }

  render() {
    return (
     <section className="color-palette">
      {this.generateColorPalette()}
     </section>
    );
  }
}