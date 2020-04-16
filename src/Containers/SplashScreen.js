import React from 'react';
import { Images } from '../Utils';
export default function Splash() {

  return (
    <div className="splash">
      <div className="splash--image">
        <img src={Images.path('logo.png')} />
      </div>
      <div className="splash--version">
        <p>version 1.2.0</p>
      </div>
    </div>
  );
}


