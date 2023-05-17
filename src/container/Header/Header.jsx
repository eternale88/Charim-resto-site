import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Header.css";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavor' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: "2rem 0" }}>
        Mollit deserunt fugiat enim fugiat esse deserunt ad nostrud. Anim ut
        commodo sit exercitation pariatur aute do officia nisi aliquip dolor
        dolor aliquip duis. Non laborum qui duis esse id officia voluptate
        aliquip dolore dolor. Nisi et amet culpa Lorem esse deserunt ad id velit
        adipisicing magna labore excepteur. Sit enim ut esse do nisi do tempor
        duis deserunt commodo commodo ad aute.
      </p>
    </div>
    <div className='app__wrapper_img'></div>
  </div>
);

export default Header;
