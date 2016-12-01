import React from "react";
import { Grid, Search, Segment } from "semantic-ui-react";

import "./navbar.css";

import audexusLogo from "./img/audexus_logo.png";

export default class NavBar extends React.Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleChange = (e, result) => this.setState({ value: result.title })

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  };
  render() {
    const { isLoading, value, results } = this.state

    return (
      <div id="navbar">
        <Grid columns='equal'>
          <Grid.Column>
            <Segment><a target="_blank" href="http://www.audexus.com/"><img class="ui image" src={audexusLogo}></img></a></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Grid columns='equal'>
                <Grid.Column><a href="#">Help Center</a></Grid.Column>
                <Grid.Column><a href="#">Contact Us</a></Grid.Column>
                <Grid.Column><a href="#">Logout</a></Grid.Column>
              </Grid>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment floated="right">
                  <Search
                    loading={isLoading}
                    onChange={this.handleChange}
                    onSearchChange={this.handleSearchChange}
                    results={results}
                    value={value}
                    {...this.props}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}