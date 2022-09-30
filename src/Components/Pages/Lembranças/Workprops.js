import React from 'react';

const Workprops = ({title , work, work2, work3, work4, work5, work6, work7}) => {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                <li><a href={work} target='_blanck' title='Amigão'>Amigão</a></li>
                <li><a href={work2} target='_blanck' title='The Withcer'>The Withcer</a></li>
                <li><a href={work3} target='_blanck' title='Beat'>Beat</a></li>
                <li><a href={work4} target='_blanck' title='Star Wars'>Star Wars</a></li>
                <li><a href={work5} target='_blanck' title='Calculadora'>Calculadora</a></li>
                <li><a href={work6} target='_blanck' title='Props'>Props</a></li>
                <li><a href={work7} target='_blanck' title='Filmes'>Filmes</a></li>
            </ul>
        </div>
    );
}

export default Workprops;
