import { useEffect } from "react";
import { Link } from "react-router-dom";

function TopBar({ landingpage = false }) {
	return (
		<div className="top_bar_div">
			<span className="Link_top_container_span">
				[
				<Link className="Link_top" to={`/settings/`}>
					Settings
				</Link>
				{/* <Link className="Link_top" to={`/settings/?href=${window.location.href}`}>
					Settings
				</Link> */}]
			</span>
			{!landingpage && (
				<span className="Link_top_container_span">
					[
					<Link className="Link_top" to="/">
						Home
					</Link>
					]
				</span>
			)}
			{/* {window.location.pathname !== "/" && (
				<span className="Link_top_container_span">
					[
					<Link className="Link_top" to={decodeURIComponent(window.location.search).split("href=")[1]}>
						Back
					</Link>
					]
				</span>
			)} */}
		</div>
	);
}

export default TopBar;
