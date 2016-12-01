import React from "react";
import { Grid, Item, Segment } from "semantic-ui-react";

require("./footer.css");

import facebookIcon from "./img/facebook_icon_34px_square_color.png";
import twitterIcon from "./img/twitter_icon_34px_square_color.png";
import linkedinIcon from "./img/linkedin_icon_34px_square_color.png";
import instagramIcon from "./img/instagram_icon_34px_square_color.png";
import youtubeIcon from "./img/youtube_icon_34px_square_color.png";


export default class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<Grid columns='equal'>
					<Grid.Row verticalAlign="middle">
						<Grid.Column width={4}>
							<Segment>
								<a href="#"><img class="ui image" src={facebookIcon}></img></a>
								<a href="#"><img class="ui image" src={twitterIcon}></img></a>
								<a href="#"><img class="ui image" src={linkedinIcon}></img></a>
								<a href="#"><img class="ui image" src={instagramIcon}></img></a>
								<a href="#"><img class="ui image" src={youtubeIcon}></img></a>
							</Segment>
						</Grid.Column>
						<Grid.Column width={1}><Segment></Segment></Grid.Column>
						<Grid.Column width={8}>
							<Segment>
								<a href="#"><Item>Help Center</Item></a>  |
								<a href="#"><Item>  Contact Us</Item></a>  |
								<a href="#"><Item>  Minimum System Requirements</Item></a>  |
								<a href="#"><Item>  Privacy</Item></a>
							</Segment>
						</Grid.Column>
						<Grid.Column width={3}><Segment></Segment></Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<Segment><p>© 2016 Audexus.  Unauthorized access and use is prohibited.  Usage is monitored. All rights reserved.  Your receipt and use of this service is subject to the Terms and Conditions of your electronic agreement with Audexus.</p></Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
};