import React from 'react';
import axios from 'axios'
import Productdetail from './productdetail'
import Footer from './footer'
class detailcomponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            ID:props.match.params.id,
            isStatus: false
        }
    }
    componentDidMount(){
        axios
            .get("https://cc-mock-api.herokuapp.com/product/"+this.state.ID)
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
            return <React.Fragment></React.Fragment>
        }
        else{
        return(
            <React.Fragment>
                <div className="container mb-5 ">  
                    <Productdetail  list={this.state.data} key={this.state.data.id}></Productdetail>
                </div> 
                <Footer />
            </React.Fragment>
            );
        }
    }
}

export default detailcomponent