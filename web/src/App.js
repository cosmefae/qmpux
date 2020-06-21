import React, {useEffect, useState} from 'react';
import 'normalize-css/normalize.css';
import TipCard from './components/Tip/Card/Card';
import axios from 'axios';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/categories?_embed=tips')
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  }, []);

  return (
    <div className="App">
      <section className="cards">
        {categories.map((category) => (
          <div key={category.id} className={`category ${category.name}`}>
            <h2>{category.title}</h2>
            
            {category.tips.map((fandangos) => (
              <TipCard key={fandangos.id} category={category} tip={fandangos} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
