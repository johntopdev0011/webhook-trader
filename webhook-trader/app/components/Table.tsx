import React from 'react';

interface TableProps {
  data: string[][];
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Render the HTML table
  return (
    <table>
      {data.map((row, index) => (
        <tr key={index}>
          {row.map((column, columnIndex) => (
            <td key={columnIndex}>{column.trim()}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
