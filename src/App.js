import React from 'react';


function App() {

  return (
    <div className="App">
      <div className='container'>
        <div className='ro'>
          <div className='col-md-8 mx-auto mt-4'>
            <h1 className='text-center text-white display-3'>TÜRKİYE COVİD-19 Arama Motoru</h1>
            <input type="text" className='form-control' placeholder='GG/AA/YY'/>
            <table class="table table-striped text-white">
  <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Test Sayısı</th>
            <th scope="col">Hasta Sayısı</th>
            <th scope="col">Vefat Sayısı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>13600</td>
            <td>2500</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
export default App;