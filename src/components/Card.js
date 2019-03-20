import React, {Component} from 'react';
import ColorPalette from './ColorPalette';
import '../styles/card.css'

export default class Card extends Component{
  
  /* converts miltary time to regular time */
  generateTime(dateCreated){
    let time = dateCreated.split(' ')[1].split(':');
    let hour = Number(time[0]);
    let minute = time[1];
    let suffix='';
    let standardHour;

    if(hour===0){
      standardHour = 12;
      suffix='AM'
    }
    else if(hour>=1 && hour<=11){
      standardHour = hour;
      suffix='AM'
    }
    else if (hour===12){
      standardHour = hour;
      suffix='PM'
    }
    else{
      standardHour = hour-12;
      suffix = 'PM'
    }
    return `${standardHour}:${minute} ${suffix}`;
  }

  render(){
    return (
      <section className="card">
       <section className="info">
         <h2 className='palette-title'>{this.props.title}</h2>
           <h4 className='made-by'> by {this.props.userName} at {this.generateTime(this.props.dateCreated)}</h4>
           <div className="views-and-votes">
             <span>{this.props.numViews} views</span>
             <span>{this.props.numVotes} votes</span>
           </div>
       </section>
       <ColorPalette colors={this.props.colors}/>
      </section>
     );
  }
}
