import React from "react"

const RoomSizeTable = () => {
  return (
    <>
      <table class="table table-striped room-size-table">
        <thead>
          <tr>
            <th scope="col">Room</th>
            <th scope="col">Size m²</th>
            <th scope="col">Cooling</th>
            <th scope="col">Heating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Small</th>
            <td>3.0m x 3.0m (9 m²)</td>
            <td>2.5kW</td>
            <td>3.2kW</td>
          </tr>
          <tr>
            <th scope="row">Sm/Med</th>
            <td>5.0m x 5.0m (25 m²)</td>
            <td>3.5/3.7kW</td>
            <td>4.3kW</td>
          </tr>
          <tr>
            <th scope="row">Medium</th>
            <td>5.5m x 5.5m (30 m²)</td>
            <td>3.7/5.0kW</td>
            <td>6.0kW</td>
          </tr>
          <tr>
            <th scope="row">Med/lg</th>
            <td>6.3m x 6.3m (40 m²)</td>
            <td>6.0kW</td>
            <td>7.1kW</td>
          </tr>
          <tr>
            <th scope="row">Large</th>
            <td>7.1m x 7.1m (50 m²)</td>
            <td>7.1kW</td>
            <td>8.0kW</td>
          </tr>
          <tr>
            <th scope="row">XL Large</th>
            <td>7.7m x 7.7m (55 m²)</td>
            <td>8.0/9.2kW</td>
            <td>9.0/10.0kW</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default RoomSizeTable
