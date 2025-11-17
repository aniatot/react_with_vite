import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function ConceptsRecapDay() {
  const { dayId } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/src/conceptsRecap/days/${dayId}.md`)
      .then((res) => res.text())
      .then(setMarkdown);
  }, [dayId]);

  return (
    <div className="concepts-recap-markdown">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default ConceptsRecapDay;
