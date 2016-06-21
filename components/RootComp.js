import React from 'react';
import { Link } from 'react-router';

var RootComp = React.createClass({
	render: function () {
		return (
			<div>
				<div>RootComp</div>
				<ul className="menu">
					<li><Link to="a">route a</Link></li>
					<li><Link to="b">route b</Link></li>
					<li><Link to="c">route c</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
});

export default RootComp;