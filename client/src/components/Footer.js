import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets


class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '&copy; Wilmer Rodriguez 2020 UAN' } = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;