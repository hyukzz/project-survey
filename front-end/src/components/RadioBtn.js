import React from "react";
import { Radio } from "antd";

class RadioBtn extends React.Component {
	state = {
		value: 1,
	};

	onChange = e => {
		console.log("radio checked", e.target.value);
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		return (
			<Radio.Group onChange={this.onChange} value={this.state.value}>
				<Radio value={1}>예</Radio>
				<Radio value={2}>아니오</Radio>
			</Radio.Group>
		);
	}
}
export default RadioBtn;
