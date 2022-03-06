// Kudos Component
import React, { Component } from "react";

class Kudos extends Component {
	// setting the initial state for dopenessCount to be 0
	state = {
		kudoCount: 0,
	};

	// increaseKudos method that is called onClick event
	increaseKudos = () => {
		let moreKudos = this.state.kudoCount + 1;
		this.setState({
			kudoCount: moreKudos,
		});
	};

    // no decrease kudos method because we aren't adding downvoting
    // as per our user research

	render() {
		return (
			<div>
				<button onClick={this.increaseKudos}>Give Kudos!</button>
				<span> Kudos Count: {this.state.kudoCount}</span>
			</div>
		);
	}
}

export default Kudos;