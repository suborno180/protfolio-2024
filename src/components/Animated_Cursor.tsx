"use client"
import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Animated_Cursor = () => {

  return (
    <>
       <AnimatedCursor
          innerSize={10} // Decreased inner size
          outerSize={20} // Increased outer size
          color="255,255, 255" // Changed color to red
          outerAlpha={0.4} // Increased outer transparency
          innerScale={0.5} // Decreased inner scale
          outerScale={5} // Increased outer scale
        />
    </>
  )
}

export default Animated_Cursor
