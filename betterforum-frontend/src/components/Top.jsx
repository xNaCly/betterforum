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
						<Link className="Link" to="/createThread">
							/createThread
						</Link>
					)}

					{/* <Link
						className="Link"
						to={
							window.location.pathname === "/"
								? "/createThread"
								: `/thread/${window.location.pathname.split("/thread/")[1]}/createComment`
						}>
						{window.location.pathname === "/" ? "/createThread" : "/createComment"}
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default Top;
