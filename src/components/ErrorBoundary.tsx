import React, {Component} from "react";

class ErrorBoundary extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if(this.state.hasError) {
            return <h4>Что-то пошло не так!</h4>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;