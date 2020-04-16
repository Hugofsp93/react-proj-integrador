import React from 'react';
import PropTypes from 'prop-types';

const Marker = props => (
  <div
    className="marker-places"
    alt={props.text}
    style={{ backgroundColor: props.color || '#000' }}
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