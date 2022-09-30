import React, { useState } from 'react';
import Props from './Props';
import T2 from '../../assets/t2.jpeg'
import T1 from '../../assets/T1.jpeg'
import T3 from '../../assets/T3.jpeg'


const About = (props) => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    return (
        <div>
            <Props
                btn={() => { setOpen(!open) }}
                btn2={() => { setOpen2(!open2) }}
                btn3={() => { setOpen3(!open3) }}>
                <h1>Parabéns pela sua Jornada Até aqui</h1>
                <p>Parabéns Alunes, vocês são brabos,
                    chegaram até o final de um ciclo que vão concluir com maestria,
                    amizade e compartilhamento de conhecimento,
                    criamos laços e aprendemos um com outro um codigo mais humano e para todes!
                </p>
                {open && <img style={{ width: '20vw' }} src={T2} alt='Turma 2' />}
                {open2 && <img style={{ width: '20vw' }} src={T1} alt='Turma 1' />}
                {open3 && <img style={{ width: '20vw' }} src={T3} alt='Turma 3' />}
            </Props>
        </div>
    );
}

export default About;
