import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

import api from '../../services/api'
import isConnected from '../../utils/isConneted'


function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
      setLateCount(response.data.length);
    })
  }

  useEffect(() => {
    lateVerify()
  },[])

  async function Logout() {
    localStorage.removeItem('@todo/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>

      <S.RigthSide>
        <Link to="/">HOME</Link>
        <span className='divider'/>
        <Link to="/task">NOVA TAREFA</Link>
        <span className='divider'/>
        { 
          !isConnected ? 
          <Link to="qrcode">SINCRONIZAR CELULAR</Link> :
          <button type="button" onClick={Logout}>SAIR</button>
        }
        {
          lateCount &&
          <>
            <span className='divider'/>
            <button type="button" onClick={clickNotification} id="notification">
              <img src={bell} alt="Notificação"/>
              <span>{ lateCount }</span>
            </button>
          </>
        }
      </S.RigthSide>
    </S.Container>
  );
}

export default Header;
