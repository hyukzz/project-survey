import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

class InputForm extends React.Component {
	onChange = e => {
		console.log("onchangInput");
	};

	render() {
		return (
			<div>
				<Input
					placeholder="input with clear icon"
					allowClear
					onChange={this.onChange}
				/>
				<br />
				<br />
				<TextArea
					placeholder="textarea with clear icon"
					allowClear
					onChange={this.onChange}
				/>
			</div>
		);
	}
}
export default InputForm;
