import React from "react";

class Form extends React.Component {
    render() {

        return (
            <div id="container">
                <form onSubmit={this.props.getWeather} id="weatherContainer">
                   <span> City :</span> <input type="text" name="city" placeholder="City..." />
                   <span>Country :</span> <input type="text" name="country" placeholder="Country..." />
                    <div id="btnDiv">
                        <button id = "btnWeather">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Form;