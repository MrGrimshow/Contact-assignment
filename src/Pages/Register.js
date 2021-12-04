import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerWithEmail,signInWithGoogle,} from "../actions/authActions";

const Register = (props) => {
	if (!props.auth.isLoaded) return null;
	if (!props.auth.isEmpty) props.history.push("/");
	const handleSubmit = (e) => {
		e.preventDefault();
		let email = e.target.elements.email.value;
		let password = e.target.elements.password.value;
		props.registerWithEmail(email, password);
	};
	return (
		<Container style={{ marginTop: "5 rem" }}>
			<h1>Register User</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input type="email" name="email" />
				</div>
				<div>
					<label>password</label>
					<input type="password" name="password" />
				</div>
				<button>save user</button>
				<hr></hr>
				<Link to="/login">Already have an account? Sign in</Link>
				<button onClick={props.signInWithGoogle}>sign in with google</button>
			</form>
		</Container>
	);
};


const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = {
	registerWithEmail,
	signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);