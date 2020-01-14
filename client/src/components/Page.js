import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function  Page(props) {
    
    return(
        <React.Fragment>
            <Header />
                {props.children}
            <Footer />
        </React.Fragment>
    )
} 