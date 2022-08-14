import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';
import * as S from './styles';

// api
import api from '../../services/api'

// componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/typeicons';

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');
   
    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response => {
        setLateCount(response.data.length);
        })
    }

    async function LoadTaskDetails() {
        await api.get(`/task/${match.params.id}`)
        .then(response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
        })
    }

    async function Save() {
        if(match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setRedirect(true))
        } else {
            await api.post('/task', {
                macaddress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setRedirect(true))
        }
    }

    useEffect(() => {
        lateVerify();
        LoadTaskDetails();
    }, [])

    return (
        <S.Container>
            { redirect && <Redirect to="/"/> }
            <Header lateCount={lateCount}/>
            
            <S.Form>
                <S.TypeIcons>
                    {
                        typeIcons.map((icon, index) => (
                            index > 0 &&
                            <button type="button" onClick={() => setType(index)}>
                                <img src={icon} alt="Tipo da tarefa"
                                className={type && type != index && 'inative'}/>
                            </button>
                                
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Título</span>
                    <input type="text" placeholder='Título da tarefa...'
                    onChange={e => setTitle(e.target.value)} value={title}/>
                </S.Input>

                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Descrição da tarefa..."
                    onChange={e => setDescription(e.target.value)} value={description}/>
                </S.TextArea>

                <S.Input>
                    <span>Data</span>
                    <input type="date" placeholder='Título da tarefa...'
                    onChange={e => setDate(e.target.value)} value={date}/>
                </S.Input>

                <S.Input>
                    <span>Hora</span>
                    <input type="time" placeholder='Título da tarefa...'
                    onChange={e => setHour(e.target.value)} value={hour}/>
                </S.Input>
                
                <S.Options>
                    <div>
                        <input type="checkbox" checked={done}
                        onChange={() => setDone(!done)}/>
                        <span>CONCLUÍDO</span>
                    </div>

                    <button type="button">EXCLUIR</button>
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>SALVAR</button>
                </S.Save>

            </S.Form>

            <Footer/>   
        </S.Container>
    );
}

export default Task;
