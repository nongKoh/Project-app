import React from 'react'
import Product from './product'
import axios from 'axios'
import Footer from "./footer"
import Header from './header'

class Gridcomponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:[],
            isStatus: false
        }
    }
    componentDidMount(){
        axios.get("https://cc-mock-api.herokuapp.com/product")
            .then(res => {
               console.log(res);
               this.setState({
                   data:res.data,
                   isStatus:true
               });
            })
            .catch(err => console.log(err))
    }
    render() {
        if(!this.state.isStatus){
            return <React.Fragment>
                        Loading.....................
                    </React.Fragment>
        }
        else{
            let card = this.state.data.map((product) =>
                <Product list={product} key={product._id}></Product>
            );
            return (
                <React.Fragment>
                    <Header />
                    <div className="container mb-5">
                        <div className="body-main">
                            <div className="row">
                                {card} 
                            </div>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            );
        }
    }
}

export default Gridcomponent