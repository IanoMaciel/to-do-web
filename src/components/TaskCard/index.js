import React, { useMemo } from "react";
import { format } from 'date-fns';
import * as S from './styles';

import typeIcons from "../../utils/typeicons";


function TaskCard({ type, title, when }) {
    const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when), 'HH:mm'));
    return(
        <S.Container>
            <S.TopCard>
                <img src={ typeIcons[type] } alt="iconDefault"/>
                <h2>{title}</h2>
            </S.TopCard>
            <S.BottomCard>
                <strong>{date}</strong>
                <small>{hour}</small>
            </S.BottomCard>
        </S.Container>
    );
}

export default TaskCard;