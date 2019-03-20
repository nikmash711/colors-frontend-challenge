import React, { Component } from 'react';
import Card from './Card';
import $ from 'jquery';
import moment from 'moment';
import '../styles/dashboard.css';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      palettes: [],
      lastUpdated: '',
      loading: true,
    }
  }

  fetchColorPalettes(){
    $.getJSON('http://www.colourlovers.com/api/palettes/new?jsonCallback=?', results => {
      this.setState(
        {
          palettes: results, 
          lastUpdated: moment().format('LT'),
          loading: false,
        }
      )
    });
  }

  generatePalettes(){
    return this.state.palettes.map((palette, index)=>{
     return <Card key={index} {...palette}/>
    })
  }

  componentWillMount(){
    this.fetchColorPalettes();

    //refresh colors every minute
    this.refreshInterval = setInterval(
        () => this.fetchColorPalettes(), 60000);
  }

  componentWillUnmount(){
    //clear the interval when unmounting component
    clearInterval(this.refreshInterval);
  }

  render() {
    if(this.state.loading){
      return '';
    }

    return (
      <main className="dashboard">
        <header>
          <h1 className='website-title'>
            ColourLovers. 
            <strong> Live.</strong>
          </h1>
          {this.state.lastUpdated && <span className="time-updated">Last Updated at {this.state.lastUpdated}</span>}
        </header>
        <section className='card-list'>
          {this.generatePalettes()}
        </section>
      </main>
    );
  }
}