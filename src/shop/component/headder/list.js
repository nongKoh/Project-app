import React from 'react'

class List extends React.Component{
    render() {
        return(
            <div>
                <div className="flex-container">
                    <div className="hamburger-list">
                        <div className="hamburger-row"><span className="dot-line"></span><span className="line"></span></div>
                        <div className="hamburger-row"><span className="dot-line"></span><span className="line"></span></div>
                        <div className="hamburger-row"><span className="dot-line"></span><span className="line"></span></div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default List