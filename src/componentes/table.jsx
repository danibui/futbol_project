import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    { id : '9', player: 'Antonio Ramirez', position: 'Defender', goals: 3, age: 29 },
    { id : '10', player: 'Carlos Martinez', position: 'Midfielder', goals: 14, age: 27 },
    { id : '11', player: 'Stefan Kovac', position: 'Goalkeeper', goals: 0, age: 30 },
    { id : '12', player: 'Luis Fernandez', position: 'Forward', goals: 18, age: 26 },
    { id : '13', player: 'Patrick O\'Connor', position: 'Defender', goals: 5, age: 33 },
    { id : '14', player: 'Jorge Gonzalez', position: 'Midfielder', goals: 10, age: 25 },
    { id : '15', player: 'Ricardo Lopez', position: 'Forward', goals: 22, age: 30 },
    { id : '16', player: 'Sebastian Muller', position: 'Midfielder', goals: 8, age: 28 },
    { id : '17', player: 'Julian Smith', position: 'Defender', goals: 6, age: 27 },
    { id : '18', player: 'Robert Johnson', position: 'Forward', goals: 15, age: 29 },
    { id : '19', player: 'Nicolas Alvarado', position: 'Midfielder', goals: 11, age: 24 },
    { id : '20', player: 'Marco Aurelio', position: 'Defender', goals: 4, age: 32 },
  ];

  const [visiblePlayers, setVisiblePlayers] = useState(players);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredPlayers = players.filter(player =>
      player.player.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div className="title-container" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h3>TOP SCORERS</h3>
      </div>
      <div className="search-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Buscar por nombre de jugador..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '0.5rem', width: '300px' }} 
        />
        <Button variant="secondary" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
      <div className="actions-container" style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
        <ButtonGroup className="mb-3">
          <Button variant="light" onClick={handleEvenRows}>Pintar Pares</Button>
          <Button variant="light" onClick={handleOddRows}>Pintar Impares</Button>
          <Button variant="light" onClick={handleRows1To10}>Traer de 1 a 10</Button>
          <Button variant="light" onClick={handleRows11To20}>Traer de 11 a 20</Button>
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
