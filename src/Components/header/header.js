import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from '../Pages/About/About';
import Works from '../Pages/Lembranças/Works';
import Onu from '../Pages/Ods/Onu';

const Header = ({link1, link2, link3}) => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>{link1}</Link>
                    </li>
                    <li>
                        <Link to='/works'>{link2}</Link>
                    </li>
                    <li>
                        <Link to='/ods'>{link3}</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/about' element={<About />}/>
                <Route path='/works' element={<Works />}/>
                <Route path='/ods' element={<Onu />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Header;
