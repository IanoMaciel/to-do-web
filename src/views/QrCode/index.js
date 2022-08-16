import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Qr from 'qrcode.react';

import * as S from './styles';

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
  const [mac, setMac] = useState();
  const [redirect, setRedirect] = useState(false);

  async function SaveMac() {
    await localStorage.setItem('@todo/macaddress', mac);
    setRedirect(true);
    window.location.reload();
  }

  return(
    <S.Container>
      { redirect && <Redirect to="/"/>}
      <Header/>
      
      <S.Content>
          <h2>Capturar o código pelo APP</h2>
          <p>Suas atividades serão sincronizadas com o seu celular</p>
          <S.QrCodeArea>
            <Qr value="getmacaddress" size={350}/>
          </S.QrCodeArea>

          <S.CodeValidation>
            <span> Informe o código que apareceu no seu celular </span>
            <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
            <button type="button" onClick={SaveMac}>Sincronizar</button>
          </S.CodeValidation>
      </S.Content>

      <Footer/>
    </S.Container>
  );
}

export default QrCode;
