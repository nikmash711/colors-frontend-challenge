import React, { Component } from 'react';
import '../styles/dashboard.css';
import Palette from './Palette';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state={
      palettes: [
        {
            "id": 4636464,
            "title": "dusty laser",
            "userName": "indigorains",
            "numViews": 36,
            "numVotes": 1,
            "numComments": 0,
            "numHearts": 0,
            "rank": 0,
            "dateCreated": "2019-03-19 18:09:03",
            "colors": [
                "DA221A",
                "F3A978",
                "F9DE59",
                "4D7E82",
                "1A435F"
            ],
            "description": "damb im really making this",
            "url": "http://www.colourlovers.com/palette/4636464/dusty_laser",
            "imageUrl": "http://www.colourlovers.com/paletteImg/DA221A/F3A978/F9DE59/4D7E82/1A435F/dusty_laser.png",
            "badgeUrl": "http://www.colourlovers.com/images/badges/p/4636/4636464_dusty_laser.png",
            "apiUrl": "http://www.colourlovers.com/api/palette/4636464"
        },
        {
            "id": 4636463,
            "title": "Sugar monochrome",
            "userName": "amesmykie7017",
            "numViews": 21,
            "numVotes": 0,
            "numComments": 0,
            "numHearts": 0,
            "rank": 0,
            "dateCreated": "2019-03-19 18:04:33",
            "colors": [
                "FF67B3",
                "FFB1D8",
                "FFDDEE",
                "BEA6B2",
                "54494E"
            ],
            "description": "",
            "url": "http://www.colourlovers.com/palette/4636463/Sugar_monochrome",
            "imageUrl": "http://www.colourlovers.com/paletteImg/FF67B3/FFB1D8/FFDDEE/BEA6B2/54494E/Sugar_monochrome.png",
            "badgeUrl": "http://www.colourlovers.com/images/badges/p/4636/4636463_Sugar_monochrome.png",
            "apiUrl": "http://www.colourlovers.com/api/palette/4636463"
        },
        {
            "id": 4636462,
            "title": "Pink glo monochrome",
            "userName": "amesmykie7017",
            "numViews": 21,
            "numVotes": 0,
            "numComments": 0,
            "numHearts": 0,
            "rank": 0,
            "dateCreated": "2019-03-19 17:50:45",
            "colors": [
                "FA008A",
                "FA8FCA",
                "FADDED",
                "9F8D97",
                "483F44"
            ],
            "description": "",
            "url": "http://www.colourlovers.com/palette/4636462/Pink_glo_monochrome",
            "imageUrl": "http://www.colourlovers.com/paletteImg/FA008A/FA8FCA/FADDED/9F8D97/483F44/Pink_glo_monochrome.png",
            "badgeUrl": "http://www.colourlovers.com/images/badges/p/4636/4636462_Pink_glo_monochrome.png",
            "apiUrl": "http://www.colourlovers.com/api/palette/4636462"
        },
        {
            "id": 4636461,
            "title": "Knockout monochrome",
            "userName": "amesmykie7017",
            "numViews": 25,
            "numVotes": 0,
            "numComments": 0,
            "numHearts": 0,
            "rank": 0,
            "dateCreated": "2019-03-19 17:45:13",
            "colors": [
                "FF3EA5",
                "FAC0DF",
                "EFA7CE",
                "F7E5EE",
                "4A4045"
            ],
            "description": "",
            "url": "http://www.colourlovers.com/palette/4636461/Knockout_monochrome",
            "imageUrl": "http://www.colourlovers.com/paletteImg/FF3EA5/FAC0DF/EFA7CE/F7E5EE/4A4045/Knockout_monochrome.png",
            "badgeUrl": "http://www.colourlovers.com/images/badges/p/4636/4636461_Knockout_monochrome.png",
            "apiUrl": "http://www.colourlovers.com/api/palette/4636461"
        },
    ]
    }
  }

  // fetchColorPalettes(){
  //   fetch(`http://www.colourlovers.com/api/palettes/new?format=json`, {
  //     method: 'GET',
  //     // headers: {
  //     //     'Content-Type': 'application/json',
  //     // },
  //     mode: 'no-cors'
  // })
  //     // .then(res => console.log(res))
  //     // .then(palettes => {
  //     //   console.log(palettes);
  //     // })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  generatePalettes(){
    return this.state.palettes.map((palette, index)=>{
     return <Palette key={index} {...palette}/>
    })
  }

  componentWillMount(){
    // this.fetchColorPalettes();
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