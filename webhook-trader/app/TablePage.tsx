import React from 'react';
import fs from 'fs';
import path from 'path';
import Table from './components/Table';

interface TablePageProps {
  data: string[][];
}

const TablePage: React.FC<TablePageProps> = ({ data }) => {
  return (
    <div>
      <h1>Data Table</h1>
      <Table data={data} />
    </div>
  );
};

export default TablePage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'orderLogs.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  console.log(`HERE`)
  console.log(`${fileContent}`)

  const rows = fileContent.split('\n');
  const data = rows.map((row) => row.replace('info: ', '').split(','));

  return {
    props: {
      data,
    },
  };
}
