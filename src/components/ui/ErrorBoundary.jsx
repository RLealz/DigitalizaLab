import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log to an error reporting service in production
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-light px-4">
                    <div className="text-center max-w-md">
                        <h1 className="text-4xl font-bold text-dark mb-4">
                            Something went wrong
                        </h1>
                        <p className="text-gray-600 text-lg mb-8">
                            We&apos;re sorry for the inconvenience. Please try refreshing the page.
                        </p>
                        <button
                            type="button"
                            onClick={this.handleRetry}
                            className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
