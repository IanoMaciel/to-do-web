import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

import api from '../../services/api'



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
        <Link to="qrcode">SINCRONIZAR CELULAR</Link>
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
