
import { Outlet } from 'react-router-dom';
import './PerspectiveContainer.css';

function PerspectiveContainer() {
  return (
    <div className="perspective-container">
      <Outlet />
    </div>
  );
}

export default PerspectiveContainer;
