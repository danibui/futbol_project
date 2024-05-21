import React from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css'; // Asegúrate de que la ruta sea correcta

function ResponsiveExample() {
  const columnNames = ['#', 'PLAYER', 'POSITION', 'GOALS', 'AGE'];

  return (
    <Table responsive className="table-custom">
      <thead>
        <tr>
          {columnNames.map((name, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Michel Meier</td>
          <td>Goalkeeper</td>
          <td>0</td>
          <td>31</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Roberto Alexis</td>
          <td>Defender</td>
          <td>24</td>
          <td>32</td>
        </tr>
        <tr>
          <td>5</td>
          <td>John Winfield</td>
          <td>Defender</td>
          <td>21</td>
          <td>32</td>
        </tr>
        <tr>
          <td>5</td>
          <td>John White</td>
          <td>Forward</td>
          <td>7</td>
          <td>31</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Michael Davis</td>
          <td>Midfielder</td>
          <td>9</td>
          <td>28</td>
        </tr>
        <tr>
          <td>9</td>
          <td>David Norman</td>
          <td>Midfielder</td>
          <td>12</td>
          <td>31</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Burton Herbertson</td>
          <td>Forward</td>
          <td>21</td>
          <td>31</td>
        </tr>
        <tr>
          <td>11</td>
          <td>James Brady</td>
          <td>Forward</td>
          <td>12</td>
          <td>20</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;
