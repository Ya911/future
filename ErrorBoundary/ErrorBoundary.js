import {Component} from 'react'
export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // عرض واجهة مستخدم بديلة
      console.log(error);
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // تستطيع تسجيل الخطأ إلى خدمة التبليغ عن الأخطاء
      console.log({ error, errorInfo })
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        )
      }
  
      return this.props.children; 
    }
  }