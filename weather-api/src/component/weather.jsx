import React, { Component } from 'react';

class Weather extends Component {
    state = { data: {} }

    async componentDidMount() {
        const data = await fetch('https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=117a60b8f1d548dca771db132c52bd06');
        const json = await data.json();
        console.log(json)
        this.setState({data: {json} });
    }
    render() { 
        return ( 
            <div>this is data</div>
         );
    }
}
 
export default Weather;