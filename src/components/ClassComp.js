import React from "react";

class ClassComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {nomor: 0};
	}
	render() {
		return (
		<div>
			<h1>Halo {this.props.nama}! tulisan ini dibuat dengan Class Component</h1>
		</div>

		);
	}
}


export default ClassComp;
