import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.state({hasError: true})
    }

    render() {
        if (this.state.hasError){
            <h1>Ooops... Isso não é bom!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry