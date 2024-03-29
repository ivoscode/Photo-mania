import React from 'react';
const Tabs = () => {
  return (<section className="section container scrollspy" id="services">
    <div className="row">
      <div className="col s12 l4">
        <h2 className="indigo-text text-darken-4">What I do..</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
      </div>
      <div className="col s12 l6 offset-l2">

        <ul className="tabs">
          <li className="tab col s6">
            <a href="#photography" className="active indigo-text text-darken-4">Photography</a>
          </li>
          <li className="tab col s6">
            <a href="#editing" className="indigo-text text-darken-4">Editing</a>
          </li>
        </ul>
        <div id="photography" className="col s12">
          <p className="flow-text indigo-text text-darken-4">Photography</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
          <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        </div>
        <div id="editing" className="col s12">
          <p className="flow-text indigo-text text-darken-4">Editing</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
          <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        </div>
      </div>
    </div>

  </section >
  );
}

export default Tabs;