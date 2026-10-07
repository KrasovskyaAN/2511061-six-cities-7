import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <h1>404 Not Found</h1>
      <Link to="/">На главную</Link>
    </div>
  );
}

export default NotFoundPage;
