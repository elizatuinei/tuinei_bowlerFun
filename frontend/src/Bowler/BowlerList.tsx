import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('https://localhost:7280/BowlingLeague');
      const bowlers = await rsp.json();
      setBowlerData(bowlers);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Names</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name:</th>
            <th>Address:</th>
            <th>City:</th>
            <th>State:</th>
            <th>Zip: </th>
            <th>Phone Number:</th>
            <th>Bowler Team Name:</th>
          </tr>
        </thead>
        <tbody>
          {bowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName}, {b.bowlerMiddleInit},{b.bowlerLastName}
              </td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
              <td>{b.team.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default BowlerList;
