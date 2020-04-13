import React, { useState, useEffect } from 'react';
export default function Splash(props) {

  return (
    <div className="splash">
      <div className="splash--image">
        <img src="/images/logo.png" />
      </div>
      <div className="splash--version">
        <p>version 1.2.0</p>
      </div>
    </div>
  );
}


