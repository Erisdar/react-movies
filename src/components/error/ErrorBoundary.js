import React from 'react';

export default class ErrorBoundary extends React.Component {
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
        console.log(error + " was thrown in proccess of rendering Content component: " + info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div id="content" className="d-flex align-self-center flex-column justify-content-start">
                    <h1>Sorry, server is not responding now</h1>
                </div>
            );
        }

        return this.props.children;
    }
}