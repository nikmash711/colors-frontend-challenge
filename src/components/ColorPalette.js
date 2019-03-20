import React, { Component } from 'react';

export default class ColorPalette extends Component {
  generateColorPalette(){
    return this.props.colors.map(color=>{
      return <div style={{width: 100, height:100, backgroundColor: `#${color}`}}></div>
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