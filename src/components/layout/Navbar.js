import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import DialogBox from "./dialouge";
import EditDialogBox from "./dialogueEdit";
import DeleteDialogBox from "./dialogueDelete";

import {
	GET_USERS,
	PUT_USER,
	POST_USER,
	DELETE_USER,
	CANCEL_USER_UPDATE,
	EDIT_USER,
} from "../redux/actions";
//import { Link } from "react-router";
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
	color: white;
	font-size: 110%;
`;
const Primary = lightBlue[600];
const Blue = blue[500];

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showViewModal: false,
			showEditModal: false,
			showDeleteModal: false,
			users: [],
		};
	}

	componentDidMount() {
		this.props.getUsers();
	}
	// openModal = () => {
	// 	// setShowModal(prev => !prev);
	// 	this.setState({ showModal: true });
	// };

	// Handles to show modals

	handleShowViewModal = (id, name, phone, email) => {
		// setShowModal(prev => !prev);
		this.setState({ showViewModal: true, id, name, phone, email });
	};
	handleShowEditModal = (id, name, phone, email) => {
		// setShowModal(prev => !prev);
		this.setState({ showEditModal: true, id, name, phone, email });
	};
	handleShowDeleteModal = (id, name, phone, email) => {
		// setShowModal(prev => !prev);
		this.setState({ showDeleteModal: true, id, name, phone, email });
	};

	// Handles to close modals

	handleCloseViewModal = () => {
		// setShowModal(prev => !prev);
		this.setState({ showViewModal: false });
	};
	handleCloseEditModal = () => {
		// setShowModal(prev => !prev);
		this.setState({ showEditModal: false });
	};
	handleCloseDeleteModal = () => {
		// setShowModal(prev => !prev);
		this.setState({ showDeleteModal: false });
	};

	render() {
		// console.log("prpos", this.props);
		return (
			<div>
				<AppBar position="static">
					<Tabs
						aria-label="simple tabs example"
						style={{
							// backgroundcolor: "Blue",
							backgroundColor: "Primary",
							justifyContent: "in-between",
						}}
					>
						<TabContainer>
							<Tab label="CRUD Operation" />

							{/* <Tab label="Item Two" />
							<Tab label="Item Three" /> */}
						</TabContainer>

						<AddButton variant="contained" color="secondary">
							Add User
						</AddButton>
					</Tabs>
				</AppBar>
				<Container>
					{/* <h2>Home Page</h2> */}
					<List style={{ padding: "25px 0 0 0" }}>
						<ListItem style={{ backgroundColor: "grey" }}>
							<Col
								xs={3}
								md={1}
								lg={1}
								style={{ display: "flex", alignItems: "center" }}
							>
								{/* <Checkbox defaultChecked color="secondary" />
						<StarBorderIcon color="primary" /> */}
								<H4Th>#</H4Th>
							</Col>
							<Col
								item
								xs={3}
								md={2}
								lg={2}
								style={{
									display: "flex",
									alignItems: "center",
									// backgroundColor: "lightpink",
								}}
							>
								<H4Th>Name</H4Th>
							</Col>

							<Col item xs={4} md={3} lg={3} style={{ paddingRight: "2px" }}>
								<H4Th>Email</H4Th>
							</Col>

							<Col item xs={2} md={2} lg={2} style={{ textAlign: "center" }}>
								<H4Th>Phone #</H4Th>
							</Col>

							<Col item xs={2} md={4} lg={4} style={{ textAlign: "center" }}>
								<H4Th>Action</H4Th>
							</Col>
						</ListItem>
						<hr />

						{this.props?.users?.map((user) => {
							return (
								<div>
									<ListItem button>
										<Col
											xs={3}
											md={1}
											lg={1}
											style={{ display: "flex", alignItems: "center" }}
										>
											{/* <Checkbox defaultChecked color="secondary" />
										<StarBorderIcon color="primary" />  */}
											<H4>{user.id}</H4>
										</Col>
										<Col
											item
											xs={3}
											md={2}
											lg={2}
											style={{ display: "flex", alignItems: "center" }}
										>
											<H4>{user.name}</H4>
										</Col>

										<Col
											item
											xs={4}
											md={2}
											lg={3}
											// style={{ paddingRight: "2px" }}
										>
											<H4 style={{ display: "flex", justifyContent: "left" }}>
												{/* {item.tags && item.tags.length > 0
												? item.tags.map((tag) => (
														<Chip
															style={{
																backgroundColor: "Orange",
																color: "white",
																fontWeight: "bold",
																marginLeft: "2px",
																marginRight: "2px",
															}}
															size="small"
															label="Freelance"
															clickable
														/>
												  ))
												: null} */}
												{user.email}
											</H4>
										</Col>

										<Col
											item
											xs={3}
											md={2}
											lg={2}
											style={{
												display: "flex",
												alignItems: "center",
												// backgroundColor: "lightblue",
											}}
										>
											<H4>{user.phone}</H4>
										</Col>

										<Col
											item
											xs={2}
											md={4}
											lg={4}
											style={{ textAlign: "center" }}
										>
											<H4>
												<AddButton
													variant="contained"
													color="Primary"
													style={{ marginRight: "10px" }}
													onClick={() =>
														this.handleShowViewModal(
															user.id,
															user.name,
															user.phone,
															user.email
														)
													}
												>
													View
												</AddButton>

												{/* <ViewModel
												showModel={this.state.showModel}
												setShowModal={this.state.showModal}
											/> */}

												{/* <div> border: 4px solid powderblue;
											{user.editMode ?
											<> */}
												{/* {user.editMode ?} */}
												<AddButton
													style={{
														marginRight: "10px",
													}}
													variant="outlined"
													color="Primary"
													// component="span"
													// onClick={() => {
													// 	this.props.updateUser(this.props.user);
													// }}
													onClick={() =>
														// this.editUser(user),
														this.handleShowEditModal(
															// this.editUser(
															// 	user
															user.id,
															user.name,
															user.phone,
															user.email
														)
													}
												>
													Edit
												</AddButton>

												<AddButton
													variant="contained"
													color="secondary"
													style={{ marginLeft: "10px", fontWeight: "bold" }}
													// onClick={() => {
													// 	this.deleteUser(user);
													onClick={() =>
														this.handleShowDeleteModal(
															user.id,
															user.name,
															user.phone,
															user.email
														)
													}
												>
													Delete
												</AddButton>
											</H4>
										</Col>
									</ListItem>

									<hr />
								</div>
							);
						})}
						<DialogBox
							open={this.state.showViewModal}
							name={this.state.name}
							phone={this.state.phone}
							id={this.state.id}
							email={this.state.email}
							handleCloseViewModal={this.handleCloseViewModal}
						></DialogBox>
						<EditDialogBox
							open={this.state.showEditModal}
							name={this.state.name}
							phone={this.state.phone}
							id={this.state.id}
							email={this.state.email}
							handleCloseEditModal={this.handleCloseEditModal}
							updateUser={this.updateUser}
						></EditDialogBox>
						<DeleteDialogBox
							open={this.state.showDeleteModal}
							name={this.state.name}
							phone={this.state.phone}
							id={this.state.id}
							email={this.state.email}
							handleCloseDeleteModal={this.handleCloseDeleteModal}
							deleteUser={this.deleteUser}
						></DeleteDialogBox>
					</List>
				</Container>
			</div>
		);
	}
	inputChanged = (event, field) => {
		this.setState({ [field]: event.target.value });
	};

	addUser = () => {
		this.props.addUser({ name: this.state.name, email: this.state.email });
	};

	deleteUser = (id) => {
		console.log(id, "i am user deleted users");
		this.props.deleteUser(id);
	};

	editUser = (user) => {
		this.props.editUser(user.id);
	};

	updateUser = (user) => {
		console.log("userUpdate", user);
		this.props.updateUser(user);
	};

	cancelUpdate = (user) => {
		this.props.cancelUpdate(user.id);
	};
}

// const mapStateTopProps = (state) => ({
// 	users: state.users,
// });
const mapStateTopProps = (state) => {
	// console.log("State", state);
	return {
		users: state.usersData.users,
	};
};
// const mapDispatchToProps = (dispatch) => ({
// 	getUsers: () => {
// 		dispatch({ type: GET_USERS });
// 	},
// 	addUser: (user) => {
// 		dispatch({ type: POST_USER, value: user });
// 	},
// 	deleteUser: (userId) => {
// 		dispatch({ type: DELETE_USER, value: userId });
// 	},
// 	editUser: (userId) => {
// 		dispatch({ type: EDIT_USER, value: userId });
// 	},
// 	updateUser: (user) => {
// 		console.log("dispatch update", user);
// 		dispatch({ type: PUT_USER, value: user });
// 	},
// 	cancelUpdate: (userId) => {
// 		dispatch({ type: CANCEL_USER_UPDATE, value: userId });
// 	},
// });
const mapDispatchToProps = (dispatch) => {
	return {
		getUsers: () => {
			dispatch({ type: GET_USERS });
		},
		addUser: (user) => {
			dispatch({ type: POST_USER, value: user });
		},
		deleteUser: (userId) => {
			dispatch({ type: DELETE_USER, value: userId });
		},
		editUser: (userId) => {
			dispatch({ type: EDIT_USER, value: userId });
		},
		updateUser: (user) => {
			console.log("dispatch update", user);
			dispatch({ type: PUT_USER, value: user });
		},
		cancelUpdate: (userId) => {
			dispatch({ type: CANCEL_USER_UPDATE, value: userId });
		},
	};
};

export default connect(mapStateTopProps, mapDispatchToProps)(Nav);
