import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Breed extends Component {
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
        this.state = {
            img: [],
            isLoading: false,
            error: null,
        }
    }

    onBtnClick(event) {
        return this.props.setBreed(event.target.name)
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://dog.ceo/api/breed/'+this.props['breed']+'/images/random')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ img: data.message, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { img, isLoading, error } = this.state;
        const imgElements = <div className="breed-img" style={{backgroundImage:'url('+img+')'}} />;
        if (error) {
            return <p className="bg-warning text-danger">{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading image...</p>;
        }
        return (
            <div className="card mb-4 shadow-sm">
                {imgElements}
                <div className="card-body">
                    <p className="card-text">{this.props['breed'][0].toUpperCase() + this.props['breed'].substring(1)}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <Link to={`/breeds/${this.props['breed']}`} className="btn btn-sm btn-outline-secondary" onClick={this.onBtnClick}>View Album</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
