import { Link } from "react-router-dom";

function TopBar({ hideHome = false, hideAdmin = false }) {
	return (
		<div className="top_bar_div">
			<div className="top_bar_items_left_container">
				<span className="Link_top_container_span">
					[
					<Link className="Link_top" to={`/settings/`}>
						Settings
					</Link>
					{/* <Link className="Link_top" to={`/settings/?href=${window.location.href}`}>
					Settings
				</Link> */}]
				</span>
				{!hideHome && (
					<span className="Link_top_container_span">
						[
						<Link className="Link_top" to="/">
							Home
						</Link>
						]
					</span>
				)}
			</div>
			{!hideAdmin && (
				<div>
					<span className="Link_top_container_span">
						[
						<Link className="Link_top" to={`/admin/`}>
							Admin
						</Link>
						]
					</span>
				</div>
			)}
		</div>
	);
}

export default TopBar;
