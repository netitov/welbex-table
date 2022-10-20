import React from 'react';

import Table from '../Table/Table';

function Main() {
  return (
    <main className="main">
      <h1 className="main__heading">Трекер активности</h1>
      <p className="main__description">Ежедневное отслеживание фитнес-активности</p>
      <Table />
    </main>
  );
}

export default Main;