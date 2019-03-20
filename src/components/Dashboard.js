import React, { Component } from 'react';
import '../styles/dashboard.css';
import Palette from './Palette';
import $ from 'jquery';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      palettes: []
    }
  }

  fetchColorPalettes(){
    $.getJSON('http://www.colourlovers.com/api/palettes/new?jsonCallback=?', results => {
      this.setState({palettes: results})
    });
  }

  generatePalettes(){
    return this.state.palettes.map((palette, index)=>{
     return <Palette key={index} {...palette}/>
    })
  }

  componentWillMount(){
    this.fetchColorPalettes();
  }

  render() {
    return (
      <header>
        <h1 className='title'>
          ColourLovers. 
          <strong> Live.</strong>
        </h1>
        <main>
          {this.generatePalettes()}
        </main>
      </header>
    );
  }
}