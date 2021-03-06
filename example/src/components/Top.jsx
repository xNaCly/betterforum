import { Link } from "react-router-dom";

const Top = ({ text }) => {
	return (
		<div className="navbar_container">
			<div className="navbar">
				<div className="div_left_align">
					<h1 className="header1">{text}</h1>
				</div>

				<div className="div_right_align">
					{window.location.pathname !== "/" ? (
						<Link className="Link" to="/">
							/home
						</Link>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Top;
