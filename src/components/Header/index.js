import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'



function Header({ lateCount, clickNotification }) {
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
        <a href='#'>SINCRONIZAR CELULAR</a>
        <span className='divider'/>
        <button type="button" onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação"/>
          <span>{ lateCount }</span>
        </button>
      </S.RigthSide>
    </S.Container>
  );
}

export default Header;
