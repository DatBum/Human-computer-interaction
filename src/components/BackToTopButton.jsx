import React from 'react';

const backToTopButton = () => {
  return(
    <a style={{display: 'none'}} href="javascript:void(0);" className="scrollTop back-to-top" id="back-to-top">
                  <i className="fa fa-chevron-up" />
    </a>
  )
}

export default backToTopButton;
