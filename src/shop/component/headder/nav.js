import React from 'react'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:{
                badge:"Answer",
                body:"This is an example of how to development productlist page from UI Design"
            },
        }
    }
    render() {
        
        const navhead = () => {
            return(
            <div className="container-fulid">
                <div className="navbar justify-content-center bt-3 pt-4 nav-head" color="light">
                    <div className="nav-item">
                        <span className="badge head pt-2 pl-3 pr-3 pb-2">{this.state.data.badge}</span>
                        <span className="content-head ml-1">{this.state.data.body}</span>
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

export default Nav