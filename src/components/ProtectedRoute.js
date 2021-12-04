import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
	console.log(auth);
	if (!auth.isLoaded) return null;

	if (!auth.isEmpty) {
		return (
			<Route
				{...rest}
				render={(props) => {
					return <Component {...props} />;
				}}
			/>
		);
	}

	return (
		<Route
			{...rest}
			render={(props) => {
				return <Redirect to={{ pathname: "/login" }} />;
			}}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(ProtectedRoute);