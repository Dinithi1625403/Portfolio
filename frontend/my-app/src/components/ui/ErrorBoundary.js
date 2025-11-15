'use client';
import { Component } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, AlertTriangle } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-secondary-900 text-white flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 2 }}
              className="text-red-500 mb-6 flex justify-center"
            >
              <AlertTriangle size={64} />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Don't worry, this happens sometimes. The error has been logged and we're working on it.
            </p>
            
            <motion.button
              onClick={() => window.location.reload()}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw size={20} />
              Reload Page
            </motion.button>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="text-gray-400 text-sm cursor-pointer hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-secondary-800 rounded-lg text-xs text-red-400 overflow-auto">
                  {this.state.error?.stack}
                </pre>
              </details>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
