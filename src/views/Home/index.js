import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

// api
import api from '../../services/api'

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActivated, setFilterActivated] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  // função responsável por carregar as tarefas cadastradas do banco de dados
  async function loadTask() {
    await api.get(`/task/filter/${filterActivated}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data);
    })
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length);
    })
  }

  function Notification() {
    setFilterActivated('late');
  }

  useEffect(() => {
    loadTask();
    lateVerify();
  }, [filterActivated])

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={Notification}/>
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

      <S.Title>
        <h1>{filterActivated == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h1>
      </S.Title>
      
      <S.Content>
        {
          tasks.map( t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when}/>
            </Link>
          ))
        }          
      </S.Content>

      <Footer/>
    </S.Container>
  );
}

export default Home;
