import React from 'react'
import { TiLocation as IconLocation, TiPhone as IconPhone } from "react-icons/ti"
import { IconContext } from "react-icons"

export default function IconText(props) {

  const renderIcon = (icon) => {
    if (icon === 'location')
      return <IconLocation />
    else if (icon === 'phone')
      return <IconPhone />
  }

  return (
    <div className="icon-text" {...props}>
      <IconContext.Provider value={{ color: "#2a2a2a", size: '1.5em', className: "global-class-name" }}>
        <>
          {renderIcon(props.icon)}
        </>
      </IconContext.Provider>

      <p className="icon-text--txt">{props.text}</p>
    </div>
  )
}