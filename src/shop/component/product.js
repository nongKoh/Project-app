import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import Button from './buttondetail'
import {Link} from "react-router-dom";
class Product extends React.Component{
    render(){
        var {
            id,
            image_url,
            name,
            description,
            price,
            brand_info,             
        } = this.props.list;
        return (
            <div className="col-3">
                <div>
                    <div className="card body-card">
                        <img className="card-img-top img-grid" src={image_url} alt="logo"></img>
                         <div className="container body-container">
                            <div className="row row-grid">
                                <div className="col-4 head-card">
                                    <img className="card-img head-card w-100" src={brand_info.url} alt="logo"></img> 
                                </div>
                                <div className="col-8 head-name">
                                    <LinesEllipsis
                                        text={name}
                                        maxLine='2'
                                        ellipsis='...'
                                        trimRight
                                        basedOn='letters'
                                    />
                                </div>
                            </div>
                                <div className="body-grid">
                                    <LinesEllipsis
                                        text={description}
                                        maxLine='2'
                                        ellipsis=''
                                        trimRight
                                        basedOn='letters'
                                    />
                                </div>
                            <div className="price-grid">
                                    ฿{price}
                            </div>
                                <Link to={"/detail/"+(id)}><Button/></Link>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
}

export default Product;