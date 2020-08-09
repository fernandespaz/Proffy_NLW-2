import React from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList(){
    return(
        <div  id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis."/>
        </div>
    )
}

export default TeacherList; 