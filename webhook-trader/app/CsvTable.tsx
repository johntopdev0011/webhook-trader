import { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CsvTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const { data } = Papa.parse(csv, { header: true });
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((value, columnIndex) => (
              <td key={columnIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CsvTable;
