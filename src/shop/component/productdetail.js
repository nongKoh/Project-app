import React from 'react'
import Home from "./home/home"

class Productdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count_cart:1
        }
    }
    subcart(){
        this.setState((prevState)=>{
            if(!(prevState.count_cart>1)){
                return{
                   count_cart:prevState.count_cart
                }
            }
            else{
            return {
                count_cart: prevState.count_cart -1
            }
        }
        })
    }
    addcart(){
        this.setState((prevState)=>{
            return {
                count_cart: prevState.count_cart +1
            }
        })
    }
    render(){
        var {
            // id,
            image_url,
            name,
            description,
            price,
            // brand_info    
        } = this.props.list;
        return (
        <div>
            <div className=""><Home name={ name } />
            </div>
            <div className="home-head">
                <div className="row">
                    <div className="col-4">
                        <div className="detail-body">
                            <img className="detail-img" src={ image_url } alt="logo"></img>
                        </div>   
                    </div> 
                    <div className="col-8">
                        <div className="row">
                            <span className="detail-name">{ name }</span>
                        </div>
                        <div className="row">
                            <div className="col-11 mt-3 col-detail">
                                <span className="description">{ description }</span>
                            </div>
                        </div>
                        <div className="row">
                            <span className="detail-price">฿{ price }</span>
                        </div>
                        <div className="row">
                            <div className="btn-group mt-3 ml-2" role="group">
                                <div 
                                onClick={ this.subcart.bind(this) } 
                                class="btn-detail btn">
                                -
                                </div>
                                <input class="input-detail" disabled value={ this.state.count_cart }></input>
                                <div 
                                onClick={ this.addcart.bind(this) } 
                                class="btn-detail btn">
                                +
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="detail-button">
                                Add to Carat
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
        )
    }
}

export default Productdetail;