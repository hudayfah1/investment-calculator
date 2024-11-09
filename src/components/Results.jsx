import { formatter } from "../util/investment";
export default function Results({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearRow, idx) => (
          <tr key={idx}>
            {Object.values(yearRow).map((value, idx) => (
              <td key={idx}>{idx > 0 ? formatter.format(value) : value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
