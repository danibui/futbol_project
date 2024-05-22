import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css'; // Asegúrate de que la ruta sea correcta

function ResponsiveExample() {
  const columnNames = ['#', 'PLAYER', 'POSITION', 'GOALS', 'AGE'];

  const players = [
    { id : '1', player: 'Michel Meier', position: 'Goalkeeper', goals: 0, age: 31 },
    { id : '2', player: 'Roberto Alexis', position: 'Defender', goals: 24, age: 32 },
    { id : '3', player: 'John Winfield', position: 'Defender', goals: 21, age: 32 },
    { id : '4', player: 'John White', position: 'Forward', goals: 7, age: 31 },
    { id : '5', player: 'Michael Davis', position: 'Midfielder', goals: 9, age: 28 },
    { id : '6', player: 'David Norman', position: 'Midfielder', goals: 12, age: 31 },
    { id : '7', player: 'Burton Herbertson', position: 'Forward', goals: 21, age: 31 },
    { id : '8', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '9', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '10', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '11', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '12', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '13', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '14', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '15', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '16', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '17', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '18', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '19', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
    { id : '20', player: 'James Brady', position: 'Forward', goals: 12, age: 20 },
  ];

  const [visiblePlayers, setVisiblePlayers] = useState(players);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredPlayers = players.filter(player =>
      player.player.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setVisiblePlayers(filteredPlayers);
  };

  const handleEvenRows = () => {
    const evenRows = players.filter((_, index) => index % 2 === 1);
    setVisiblePlayers(evenRows);
  };

  const handleOddRows = () => {
    const oddRows = players.filter((_, index) => index % 2 === 0);
    setVisiblePlayers(oddRows);
  };

  const handleRows1To10 = () => {
    setVisiblePlayers(players.slice(0, 10));
  };

  const handleRows11To20 = () => {
    setVisiblePlayers(players.slice(10, 20));
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar jugador..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="actions-container">
        <ButtonGroup className="mb-3">
          <Button variant="secondary" onClick={handleEvenRows}>Pintar Pares</Button>
          <Button variant="secondary" onClick={handleOddRows}>Pintar Impares</Button>
          <Button variant="secondary" onClick={handleRows1To10}>Traer de 1 a 10</Button>
          <Button variant="secondary" onClick={handleRows11To20}>Traer de 11 a 20</Button>
        </ButtonGroup>
      </div>
      <Table responsive className="table-custom">
        <thead>
          <tr>
            {columnNames.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visiblePlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.id}</td>
              <td>{player.player}</td>
              <td>{player.position}</td>
              <td>{player.goals}</td>
              <td>{player.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ResponsiveExample;
