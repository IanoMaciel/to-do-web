import React, { useState } from 'react'
import * as S from './styles';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {
  const [filterActivated, setFilterActivated] = useState();
  return (
    <S.Container>
      <Header/>
        <S.FilterArea>
          <button type="button" onClick={() => setFilterActivated("all")}>
            <FilterCard title="Todos" activated={filterActivated == 'all'}/>
          </button>
          <button type="button" onClick={() => setFilterActivated("today")}>
            <FilterCard title="Hoje" activated={filterActivated == 'today'}/>
          </button>
          <button type="button" onClick={() => setFilterActivated("week")}>
            <FilterCard title="Semana" activated={filterActivated == 'week'}/>
          </button>
          <button type="button" onClick={() => setFilterActivated("month")}>
            <FilterCard title="Mes" activated={filterActivated == 'month'}/>
          </button>
          <button type="button" onClick={() => setFilterActivated("year")}>
            <FilterCard title="Ano" activated={filterActivated == 'year'}/>
          </button>
          
        </S.FilterArea>
      <Footer/>
    </S.Container>
  );
}

export default Home;
