// Kudos Component
import "./style.css";
import { useEffect, useState, Component } from "react";

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
			<div className="kudo-section">
				<button className="kudo-btn" onClick={this.increaseKudos}>Give Kudos!</button>
				<span> Kudos Count: {this.state.kudoCount}</span>
			</div>
		);
	}
}

export default Kudos;

// Kudos Component
// import React, { Component } from "react";
// import { number } from "prop-types";
// import {useEffect, useState,} from "react";
// import * as postService from "../../api/post.service";

// // class Kudos extends Component {
// // function Kudos(props) {
// const Kudos = (props) => {

        // const [kudos, setKudos] = useState(0);

        // const getKudos = async () => {
        //  await postService.getOne(`${props.id}`).then((res) => {
        //      setKudos(res.data.data.kudos)
        //      console.log(res.data.data.kudos)
        //  })
        // };
    
        // useEffect(()=> {
        //  getKudos()
        // }, []);
    
    // setting the initial state for dopenessCount to be 0
    // state = {
    //  kudos: 0,
    // };

    // increaseKudos method that is called onClick event
    // increaseKudos = () => {
    //  let moreKudos = kudos + 1;
    //  props.setState({
    //      kudos: moreKudos,
    //  });
    // };

    // no decrease kudos method because we aren't adding downvoting
    // as per our user research

    // render() {
        // return (
        //  <div>
        //      <button onClick={props.increaseKudos}>Give Kudos!</button>
        //      <span> Kudos Count: {props.state.kudos}</span>
        //  </div>
        // );
    // }
// }
    // render() {
//      return (
//          <div>
//              <button onClick={() => setKudos(kudos + 1)}>Kudos!</button>
//              <span> Kudos Count: {kudos}</span>
//          </div>
//      );
//  // }
// }

// Kudos.propTypes = {
//     kudos: number
// };

// export default Kudos;