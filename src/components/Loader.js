import React from 'react';

export default function(props) {
  const containerStyle = {
    width: props.size || '60px',
    height: props.size || '60px',
  };
  const loaderStyle = {
    borderWidth: props.width || '2px',
    borderColor: `${props.color || '#6D8BAD'} transparent`,
  }

  return (
    <div className="loader" style={containerStyle} >
      <div className="first" style={loaderStyle} ></div>
      <div className="second" style={loaderStyle} ></div>
    </div>
  );
}
