
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

// useState: Holds the markdown content as a string.
// useEffect: Fetches the markdown file once on mount and updates state.
// When the component mounts, useEffect runs the fetch, and setMarkdown updates the state, triggering a re-render.
// ReactMarkdown: Renders the loaded markdown as HTML.
function ConceptsRecap() {
  // useState hook: stores the markdown content
  const [markdown, setMarkdown] = useState('');

  // useEffect hook: fetches the markdown file on component mount
  useEffect(() => {
    fetch('/src/conceptsRecap/day1.md')
      .then((res) => res.text())
      .then(setMarkdown); // setMarkdown triggers a re-render with the loaded content
  }, []); // Empty dependency array: runs only once after initial render

  return (
    <div className="concepts-recap-markdown">
      {/* ReactMarkdown renders the markdown string as HTML */}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default ConceptsRecap;
