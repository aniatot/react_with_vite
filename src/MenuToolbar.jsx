
import './MenuToolbar.css';
import { useLocation, Link } from 'react-router-dom';

function MenuToolbar() {
  const location = useLocation();
  const showBack = /^\/conceptsRecap\/day\//.test(location.pathname);
  return (
    <div className="menu-toolbar">
      <div className="toolbar-left">
        {showBack ? (
          <Link to="/conceptsRecap">&larr; Back to Page List</Link>
        ) : (
          'Left Toolbar'
        )}
      </div>
      <div className="toolbar-right">Right Toolbar</div>
    </div>
  );
}

export default MenuToolbar;
