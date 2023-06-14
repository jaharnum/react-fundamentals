// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="box--small" style={{backgroundColor: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className="box--medium" style={{backgroundColor: 'pink'}}>medium pink box</div>
const largeBox = <div className="box--large" style={{backgroundColor: 'orange'}}>large orange box</div>

function Box({size, style, children}) {
  let className;
  switch(size) {
    case 'small':
      className = 'box--small';
      break;
    case 'medium':
      className = 'box--medium';
      break;
    default:
      className = 'box--large'
  }
  return (
    <div className={className} style={style}>{children}</div>
  )
}
function App() {
  return (
    <div>
      {smallBox}
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
        </Box>
      {largeBox}
    </div>
  )
}

export default App
