import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '30px' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned footer">
            <hr />
              UHM Food Mood <br />
              University of Hawaii<br />
            <a href="https://uhm-food-mood.github.io/">Project Homepage</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
