import { useEffect, useState } from 'react';
import path from 'path';

const LogFileViewer: React.FC = () => {
  const [logContents, setLogContents] = useState<string>('');

  useEffect(() => {
    const fetchLogFile = async () => {
      try {
        const filePath = path.join(process.cwd(), 'public', 'orders.txt');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const response = await fetch(filePath);
        const logData = await response.text();
        setLogContents(logData);
      } catch (error) {
        console.error('Error fetching log file:', error);
      }
    };

    fetchLogFile();
  }, []);

  return <pre>{logContents}</pre>;
};

export default LogFileViewer;
