import React from 'react';
import Container from '../Core/Container';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const Entrysummary = ({onPresActionButton}) => {
  const entriesGrouped = [
    {key: '1', description: 'Alimentação:', amount: 200},
    {key: '2', description: 'Combustível:', amount: 50},
    {key: '3', description: 'Aluguel:', amount: 300},
    {key: '4', description: 'Lazer:', amount: 150},
    {key: '5', description: 'Outros:', amount: 100},
  ];
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPresActionButton={onPresActionButton}>
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <EntrySummaryChart />
    </Container>
  );
};

export default Entrysummary;
