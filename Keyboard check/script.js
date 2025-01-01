const div = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  div.innerHTML = `
  <table>
  <div class='color'>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
  </table>
  </div>
  `;
});
