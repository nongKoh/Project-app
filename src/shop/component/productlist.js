import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import Buttonlist from './buttonlist'
import {Link} from "react-router-dom";

class Productlist extends React.Component{
    render(){
        var {
            id,
            image_url,
            name,
            description,
            price,
            // brand_info,             
        } = this.props.list;
        return (
            <React.Fragment>
                <div className="container body-list">
                    <div className="row">
                        <div className="col-2">
                            <img className="img-list" src={image_url} alt="logo"></img>
                        </div>
                        <div className="col-10">
                            <div className="row">
                                <span className="body-product-list">{name}</span>
                            </div>
                            <div className="row ">
                                <div className="col-8">
                                    <LinesEllipsis
                                        text={description}
                                        maxLine='5'
                                        ellipsis=''
                                        trimRight
                                        basedOn='letters'
                                        className="description-product-list"
                                    />
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="container price-list">
                                            ฿{price}
                                        </div>       
                                    </div>
                                    <div className="container text-right">
                                        <Link to={"/detail/"+(id)}><Buttonlist/></Link>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Productlist;