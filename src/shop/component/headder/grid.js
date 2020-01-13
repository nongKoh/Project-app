import React from 'react'

class Grid extends React.Component {
  

  render() {
    return (
      <div>
        <div className="flex-container" >
            <div className="hamburger-grid">
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="hamburger-grid">
                <span className="line "></span>
                <span className="line"></span>
            </div>
        </div>
      </div>
    );
  }
}
export default Grid


