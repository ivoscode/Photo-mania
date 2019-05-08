import React from 'react';
const Parallax = ({ pimage }) => {
  return (<div className="parallax-container">
    <div className="parallax">
      <img src={pimage} alt="" className="responsive-img" />
    </div>
  </div>);
}

export default Parallax;