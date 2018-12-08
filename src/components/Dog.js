import React from 'react';

export default function Dog(props) {
  return (
    <a
      href={props.dog}
      className="card mb-4 shadow-sm"
      data-fancybox="gallery"
      style={{ backgroundImage: `url(${props.dog})` }}
    />
  );
}
