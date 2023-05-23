import React, {useState , useEffect} from 'react';
import axios from 'axios';



function App() {

  const [veri, setVeri] = useState();
  const [tarih , setTarih] = useState("");

  useEffect( () => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res => setVeri(res.data[tarih]))
    .catch(err => console.log(err))



  },[veri,tarih]) 




  return (
    <div className="App">
      <div className='container'>
        <div className='ro'>
          <div className='col-md-8 mx-auto mt-4'>
            <h1 className='text-center text-white display-3'>TÜRKİYE <span Style="color:red"> COVİD-19 </span> Arama Motoru</h1>
            <input type="text" className='form-control' placeholder='GG/AA/YY'
            onChange={(e) => setTarih(e.target.value) }
            
            />
            <table className="table table-striped text-white">
  <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Test Sayısı</th>
            <th scope="col">Hasta Sayısı</th>
            <th scope="col">Vefat Sayısı</th>
          </tr>
        </thead>
        <tbody >
          <tr >
            <th scope="row" >1</th>
            <td>{veri === undefined ? "Veri Bekleniyor" : veri.totalTests}</td>
            <td>{veri === undefined ? "Veri Bekleniyor" : veri.patients}</td>
            <td>{veri === undefined ? "Veri Bekleniyor" : veri.deaths}</td>
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