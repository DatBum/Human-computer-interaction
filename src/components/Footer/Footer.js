import React, { Component, Fragment} from 'react';
import FooterContainer from './FooterContainer';
import BackToTopButton from './BackToTopButton';
class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterContainer/>
        <BackToTopButton/>
      </Fragment>
    );
}
}

export default Footer;
