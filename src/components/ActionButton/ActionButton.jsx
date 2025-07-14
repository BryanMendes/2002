import React from 'react';
import { Link } from 'react-router-dom';
import './ActionButton.css';

function ActionButton({ onClick }) {
  return (
    <Link to="/venha-fazer-parte" className="action-link" onClick={onClick}>
      <div className="action-link-main">
        <div>VENHA</div>
        <div>FAZER</div>
      </div>
      <div className="action-link-vertical">
        PARTE
      </div>
    </Link>
  );
}

export default ActionButton;