import React, { Component } from 'react';
import '../styles/dashboard.css';
import Card from './Card';
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
     return <Card key={index} {...palette}/>
    })
  }

  componentWillMount(){
    this.fetchColorPalettes();
  }

  render() {
    return (
      <header>
        <h1 className='website-title'>
          ColourLovers. 
          <strong> Live.</strong>
        </h1>
        <main className='card-list'>
          {this.generatePalettes()}
        </main>
      </header>
    );
  }
}