import React, {useEffect, useState} from 'react';
import 'normalize-css/normalize.css';
import TipCard from './components/Tip/Card/Card';
import axios from 'axios';

const App = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories?_embed=tips')
      .then((response) => {
        setTips(response.data);
      });
  }, []);


  return (
    <div className="App">
      <div className="cards">
        {tips.map((tip) => (
          <TipCard tip={tip} />
        ))};
      </div>
    </div>
  );
};

export default App;
