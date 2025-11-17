
import { Link, useLocation } from 'react-router-dom';


// Automatically import all markdown files in the days folder using Vite's import.meta.glob
const dayFiles = import.meta.glob('./conceptsRecap/days/*.md', { as: 'raw', eager: true });

// Extract files with 'day' in their name and sort by filename
const days = Object.keys(dayFiles)
  .filter((path) => /day/i.test(path))
  .map((path) => {
    // Use the filename (without extension) as the id and label
    const fileName = path.split('/').pop().replace('.md', '');
    return { id: fileName, label: fileName.replace(/-/g, ' ') };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

// Renders a list of links to each day's recap
function ConceptsRecapList() {
  return (
    <div>
      <h2>Concepts Recap - Daily List</h2>
      <ul>
        {days.map(day => (
          <li key={day.id}>
            {/* Link to the markdown recap page for this day */}
            <Link to={`/conceptsRecap/day/${day.id}`}>{day.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConceptsRecapList;
