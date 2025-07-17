import React from 'react';
import { Link } from 'react-router-dom';
import './ActionButton.css';

function ActionButton({ onClick, extraClass = '' }) {
  return (
    <Link to="/venha-fazer-parte" className={`action-link${extraClass ? ' ' + extraClass : ''}`} onClick={onClick}>
      <div className="action-link-main">
        <div className="action-link-row">
          <span>VENHA</span>
          <span className="parte-inline">PARTE</span>
        </div>
        <div className="action-link-bottom">FAZER</div>
      </div>
    </Link>
  );
}

export default ActionButton;