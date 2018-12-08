import React from 'react';

export default function Dog(props) {
  const prop = props;
  return (
    <a
      href={prop.dog}
      className="card mb-4 shadow-sm"
      data-fancybox="gallery"
      style={{ backgroundImage: `url(${prop.dog})` }}
    >
      <span className="view">View</span>
    </a>
  );
}
