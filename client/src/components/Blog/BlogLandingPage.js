// Landing page for Incremental Blog About S&V 
import React from 'react';
import {Container, Header, Image, Card, Segment} from 'semantic-ui-react';
import Nav from './../Nav';
import Footer from './../Footer';

function BlogHome() { 

    return (
        <div>
            <Nav /> 
            <Container>
            <h1 className="coming-soon">Blog coming soon.</h1>
            </Container>
            <Footer />
        </div>
    )
 }

export default BlogHome;
