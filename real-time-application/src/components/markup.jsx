import React, { Component } from 'react';
import {Remarkable} from 'remarkable';

class Markup extends Component {
    state = { value: 'This is the **Default** value' }
    render() { 
        return ( 
            <div>
                <h2>What do you want to convert?</h2>
                <input id="original" type="textarea" defaultValue={this.state.value} onChange={this.handleChange}/>
                <h2>Output</h2>
                <div type="text" className="dublicate" dangerouslySetInnerHTML={this.GetRawMarkup()}></div>
            </div>
         );
    }

    handleChange = e => {
        this.setState({value:e.target.value})
    }

    GetRawMarkup =() => {
        const md = new Remarkable();
        return {__html: md.render(this.state.value)}
    }
}
 
export default Markup;