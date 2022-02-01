import React, {Fragment,useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import TitleList from './Components/TitleList'
import Form from './Components/Form'

function App() {
  const [title,setTitle] = useState({
    title_name:'',
    title_author:1,
    title_date:'',
    title_type:1,
    title_lang:1,
    title_sp:'',
    title_en:'',
    
  })
  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    const getTitles = () => {
      fetch('http://31.170.165.86:9000/api')
      .then(res => res.json())
      .then(res => setTitles(res))
    }
    getTitles()
  }, [])

  return (
    <Fragment>
      <Navbar brand="JOYCE"/>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
          <h2 style={{textAlign:'center'}}>Formulario de Títulos</h2>
          <Form title={title} setTitle={setTitle}/>
          </div>
          <div className='col-8'>
            <h2 style={{textAlign:'center'}}>Títulos</h2>
            <TitleList titles={titles}/>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
