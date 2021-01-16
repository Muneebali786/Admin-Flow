import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { ViewModel } from "../viewModel";
import {
	GET_USERS,
	PUT_USER,
	POST_USER,
	DELETE_USER,
	CANCEL_USER_UPDATE,
	EDIT_USER,
} from "../redux/actions";
//import { Link } from "react-router";
import CloseIcon from "@material-ui/icons/Close";
import {
	Button,
	AppBar,
	Tab,
	Tabs,
	Container,
	List,
	Chip,
	ListItem,
	Checkbox,
	red,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from "@material-ui/core";
import { lightBlue, blue } from "@material-ui/core/colors";

// const Container = styled.div`
// 	color: #0077b5;
// `;
// const Logo = styled.div`
// 	color: red;
// `;
// const TabMarginLeft = styled(Tab)`
// 	margin-left: 35px;
// `;
// const TabMarginRight = styled(Tab)`
// 	margin-right: 35px;
// `;

const data = [
	{
		id: 1,
		isFreelance: false,
		name: "Peter, me (3)",
		content: "Hello - Trip home from Colombo has be...",
		Date: "Mar 6",
		read: false,
		tags: [],
	},
	{
		id: 2,
		isFreelance: false,
		name: "me, Susanna (7)",
		content: "Since you asked... and i am inco...",
		Date: "Mar 6",
		read: true,
		tags: ["important", "personal"],
	},
];

const TabContainer = styled.div`
	margin-left: 35px;
	//width: 100%;
	//background-color: black;
	margin-right: 35px;
`;
const AddButton = styled(Button)`
	align-self: center;
	float: right;
	font-weight: bold;
	//justify-content: in-between;
`;
const CloseButton = styled(AddButton)`
	align-self: right;
	//float: right;
	//display: flex;
	// flex-direction: row;
	//justify: flex-end;
`;
const H4 = styled.h4`
	font-family: sans-serif;
	color: black;
	text-decoration: none;
	font-size: "16px";
	font-weight: normal;
	//align-item: left;
	display: flex;
	//align-self: center;
	justify-content: center;
	//font-weight: 800;
`;
const H4Th = styled.h4`
	font-weight: bold;
`;
// const Primary = lightBlue[600];
// const Blue = blue[500];

class EditDialogBox extends React.Component {
	render() {
		return (
			<div>
				{/* <Dialog
					open={this.props.open}
					onClose={this.props.handleCloseViewModal}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						User Id: {this.props.id}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Name: {this.props.name}
							<br />
							Email: {this.props.email}
							<br />
							Phone: {this.props.phone}
							<br />
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.handleCloseViewModal} color="primary">
							Cancel
						</Button>
					</DialogActions>
				</Dialog> */}

				<Dialog
					// open={this.state.showEditModal}
					open={this.props.open}
					onClose={this.props.handleCloseEditModal}
					aria-labelledby="form-dialog-title"
				>
					<div
						style={{
							flexDirection: "row",
							// display: "flex",
							// justify: "right",
							float: "right",
							marginTop: "4px",
							marginRight: "4px",
						}}
					>
						<CloseButton
							variant="contained"
							color="secondary"
							size="medium"
							onClick={this.props.handleCloseEditModal}
						>
							<CloseIcon />
						</CloseButton>
					</div>
					<DialogTitle id="form-dialog-title">
						User Id: {this.props.id}
					</DialogTitle>
					<DialogContent>
						{/* <DialogContentText>
														To subscribe to this website, please enter your
														email address here. We will send updates
														occasionally.
													</DialogContentText> */}

						<TextField
							id="outlined-helperText"
							label="Name"
							defaultValue={this.props.name}
							// helperText="Some important text"
							variant="outlined"
							fullWidth
						/>

						<TextField
							// autoFocus
							margin="dense"
							id="email"
							label="Email Address"
							defaultValue={this.props.email}
							variant="outlined"
							fullWidth
						/>
						<TextField
							// autoFocus
							margin="dense"
							id="phone"
							label="Phone"
							defaultValue={this.props.phone}
							variant="outlined"
							fullWidth
						/>
					</DialogContent>
					<DialogActions
						style={{
							flexDirection: "row",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<AddButton
							variant="contained"
							// onClick={this.handleCloseEditModal}
							onClick={() => {
								// console.log("updateUseer Dialog", this.props);
								// const id = this.props.id;
								const { email, id, name, phone } = this.props;
								this.props.updateUser({ email, id, name, phone });

								this.props.handleCloseEditModal();
							}}
							color="Primary"
						>
							Update
						</AddButton>

						<AddButton
							color="secondary"
							variant="contained"
							onClick={() => {
								this.props.handleCloseEditModal();
							}}
						>
							Cancel
						</AddButton>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default EditDialogBox;
