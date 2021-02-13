import React from 'react';
import Content from './Content';
import MenuList from './MenuList';

function AboutMe() {
  return (
    <article className="bottom">
      <div className="bottom__top">
        <MenuList />
      </div>
      <Content />
    </article>
  );
}

export default AboutMe;
