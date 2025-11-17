
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li>
            <NavLink to="/reactConcepts">React Concepts</NavLink>
            <ul style={{ listStyle: 'circle', marginLeft: '1.5em' }}>
              <li><NavLink to="/reactConcepts/hooks">Hooks</NavLink></li>
              <li><NavLink to="/reactConcepts/components">Components</NavLink></li>
              <li><NavLink to="/reactConcepts/javascript">JavaScript Concepts</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/games">Games</NavLink></li>
          <li><NavLink to="/conceptsRecap">Concepts Recap</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/content">Content</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
