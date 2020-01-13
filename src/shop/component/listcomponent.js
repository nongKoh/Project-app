import React from 'react'
import axios from 'axios'
import Productlist from './productlist'
import Footer from "./footer"
import Header from './header'

class Listcomponent extends React.Component{
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
                   data:res.data.list,
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
                <Productlist list={product} key={product.id}></Productlist>
            )
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
export default Listcomponent