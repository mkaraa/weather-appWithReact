import React from "react";

class Weather extends React.Component {

    render() {
        return (
            <div id="weatherDiv">
                {this.props.city && this.props.country &&<p> City : {this.props.city} , {this.props.country}</p>}
                {this.props.temperature && <p>Monthly Sum of Temperature : {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}  
                {this.props.description && <p>Condition : {this.props.description}</p>}     
            </div>
        );
    }
};

export default Weather;