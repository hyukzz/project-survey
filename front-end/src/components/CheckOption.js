import React from "react";
import { Checkbox, Row, Col } from "antd";

function onChange(checkedValues) {
	console.log("checked = ", checkedValues);
}
class CheckboxOption extends React.Component {
	render() {
		return (
			<Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
				<Row>
					<Col span={8}>
						<Checkbox value="1">1</Checkbox>
					</Col>
					<Col span={8}>
						<Checkbox value="2">2</Checkbox>
					</Col>
					<Col span={8}>
						<Checkbox value="3">3</Checkbox>
					</Col>
					<Col span={8}>
						<Checkbox value="4">4</Checkbox>
					</Col>
					<Col span={8}>
						<Checkbox value="5">5</Checkbox>
					</Col>
				</Row>
			</Checkbox.Group>
		);
	}
}
export default CheckboxOption;
