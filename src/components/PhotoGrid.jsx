import React from 'react';
import wedding from "../img/wedding.jpg"
import graduation from "../img/graduation.jpg"
import portrait from "../img/portrait.jpg"

const PhotoGrid = () => {
  return (<section className="container section scrollspy" id="photos">
    <div className="row">
      <div className="col s12 m4 l4">
        <img src={portrait} alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 m6 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Portraits</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m4 l4 offset-l1 push-l7">
        <img src={wedding} alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 m6 l6 offset-l1 pull-l5 right-align">
        <h2 className="indigo-text text-darken-4">Weddings</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>




    <div className="row">
      <div className="col s12 m4 l4">
        <img src={graduation} alt="" className="responsive-img materialboxed" />
      </div>
      <div className="col s12 m6 l6 offset-l1">
        <h2 className="indigo-text text-darken-4">Graduation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
      </div>
    </div>
  </section>);
}

export default PhotoGrid;