import React from 'react'
import Nav from "./Nav";
import Header from './Header';
import Attende from './Attende';

const Main = () => {
    return (
        <main className="flex-row">
            <Nav />
            <div className="flex-col padded">
                <Header />
                <Attende />
            </div>
        </main>
    )
}

export default Main;