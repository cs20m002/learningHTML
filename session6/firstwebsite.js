const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Time Table Sem 2</title>
  </head>
  <body>
      <h2 align="center"><b>INDIAN INSTITUTE OF TECHNOLOGY TIRUPATI</b></h2>
      <p align="center"><b>Timetable(Jan-June 2021 Semester)</b></p>
      <br>
      <p align="center"><B>COMPUTER SCIENCE ENGINEERING</B></p>
      <p align="center"><B>II Semester - I year M.Tech</B></p>
      <table border="2" cellpadding="8" cellspacing="10" align="center">
          <thead>
              <tr>
                  <th></th>
                  <th>9-9:50</th>
                  <th>10-10:50</th>
                  <th>11-11:50</th>
                  <th>12-12:50</th>
                  <th>12:50-14</th>
                  <th>14-14:50</th>
                  <th>15-15:50</th>
                  <th>16-16:50</th>
                  <th>17-17:50</th>
              </tr>
          </thead>
          <tr>
              <td align="center"><b>Mon</b></td>
              <td align="center">A</td>
              <td align="center">C</td>
              <td align="center">E</td>
              <td align="center">G</td>
              <td align="center" rowspan="5">LUNCH</td>
              <td align="center">F</td>
              <td align="center" colspan="3">-</td>
          </tr>
          <tr>
              <td align="center"><b>Tue</b></td>
              <td align="center">B</td>
              <td align="center">D</td>
              <td align="center">-</td>
              <td align="center">A</td>
              <!-- <td align="center">LUNCH</td> -->
              <td align="center">G</td>
              <td align="center" colspan="3">-</td>
          </tr>
          <tr>
              <td align="center"><b>Wed</b></td>
              <td align="center">C</td>
              <td align="center">E</td>
              <td align="center">B</td>
              <td align="center">-</td>
              <!-- <td align="center">LUNCH</td> -->
              <td align="center">-</td>
              <td align="center" colspan="3">Institute Seminar</td>
          </tr>
          <tr>
              <td align="center"><b>Thu</b></td>
              <td align="center">D</td>
              <td align="center">A</td>
              <td align="center">-</td>
              <td align="center">-</td>
              <!-- <td align="center">LUNCH</td> -->
              <td align="center">F</td>
              <td align="center" colspan="3">-</td>
          </tr>
          <tr>
              <td align="center"><b>Wed</b></td>
              <td align="center">E</td>
              <td align="center">B</td>
              <td align="center">-</td>
              <td align="center">F</td>
              <!-- <td align="center">LUNCH</td> -->
              <td align="center">G</td>
              <td align="center" colspan="3">-</td>
          </tr>
      </table>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});