import React from "react";
import { FadeLoader } from "react-spinners";

function Loader({ styles = {} }) {
	return <FadeLoader color="rgb(175, 175, 175)" css={styles} />;
}

export default Loader;