import { useNavigate } from 'react-router-dom';

function ValidationButton({ to, onClick, children }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      const shouldNavigate = onClick();
      if (!shouldNavigate) return;
    }
    navigate(to);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {children}
    </button>
  );
}

export default ValidationButton;