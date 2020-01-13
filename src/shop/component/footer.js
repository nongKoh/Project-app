import React from 'react'

class Footer extends React.Component{
    render() {
        
        const navhead = () => {
            return(
            <div className="container-fulid bg-footer sticky-bottom">
                <div className="navbar justify-content-center bt-3 pt-4 nav-head " color="light">
                    <div className="nav-item">
                        <div className="content-footer"><span><span><span>Example</span></span> by  <span>Jaranchai Thongkam. <p>ChomCHOB Group Co.Ltd.</p></span></span></div>
                    </div>
                </div>
            </div>
            )
        }

        return(
        <React.Fragment>
                { navhead()}
        </React.Fragment>
        );
    }
}

export default Footer