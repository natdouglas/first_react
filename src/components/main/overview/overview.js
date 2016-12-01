import React from "react";
import { Link } from "react-router";
import {FormattedNumber} from "react-intl";

require("./overview.css");

export default class Overview extends React.Component {
  render() {
    return (
      <div id="overview">
        <h2 class="ui header">Mortgage Accounts</h2>
        <table class="ui very basic celled table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Outstanding Principal Balance</th>
            </tr>
            </thead>
          <tbody>
            <tr>
              <td><Link to="mortgagePrimary">MORTGAGE XXXXXX2016</Link></td>
              <td><FormattedNumber value={343250.52} style="currency" currency="USD" /></td>
            </tr>
            <tr class="active">
              <td><b>Total</b></td>
              <td><b><FormattedNumber value={343250.52} style="currency" currency="USD" /></b></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}