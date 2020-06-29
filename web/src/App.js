import React, {useEffect, useState} from 'react';

import 'normalize-css/normalize.css';
import 'kickoff-grid.css';
import './assets/style/index.scss';

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
    <div className="l-container">
      {categories.map((category) => (
        <section key={category.id} className={`category category--${category.name}`}>
          <header>
            <h2 class="title-main">{category.title}</h2>
          </header>
          
          <div class="cards g g--gutter g--equalHeight">
            {category.tips.map((tip) => (
              <TipCard key={tip.id} category={category} tip={tip} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default App;
