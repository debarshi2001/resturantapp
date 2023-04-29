import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
class DishdetailComponent extends React.Component {
    renderDish(dish){
        if(dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
            
        else
            return(
                <div></div>
            );
    }

    renderComments(comt){
        if(comt != null){
            return(
                <div>
                    <h4>Comments</h4>
                    <div key={comt.comments[1].id}>
                        <p>{comt.comments[1].comment}</p>
                        <p>--{comt.comments[1].author},{comt.comments[1].date}</p>
                    </div>  
                </div>
            );

        }
        else
            return(
                <div></div>
            );
    }

    render(){
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dishDetail)}
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.dishDetail)}
                </div>
            </div>
            
        );
    }
}

export default DishdetailComponent