import React from 'react';

export default class ImageErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, info) {
        console.log(error + " was thrown in proccess of rendering Film image: " + info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <img src={require("../../img/default_film_img.jpg")} alt={this.props.alt} className="film-logo" />)
        }

        return this.props.children;
    }
}