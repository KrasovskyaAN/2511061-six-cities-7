import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <div className="spinner" role="status" aria-label="Loading" />
    </div>
  );
}

export default Spinner;
