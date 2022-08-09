import React from "react";
import * as S from './styles'
import iconDefault from '../../assets/default.png'


function TaskCard() {
    return(
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt="iconDefault"/>
                <h2>Titulo da tarefa</h2>
            </S.TopCard>
            <S.BottomCard>
                <strong>09/08/2022</strong>
                <small>10:46</small>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;