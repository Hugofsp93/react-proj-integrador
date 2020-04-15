import React from 'react';
import PropTypes from 'prop-types';

const Marker = props => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '18px',
      height: '18px',
      backgroundColor: '#000',
      border: '2px solid #fff',
      borderRadius: '100%',
      userSelect: 'none'
    }}
    alt={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;