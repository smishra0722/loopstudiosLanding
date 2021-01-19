import React from 'react';
import Header from '../../components/header/header.component.jsx';
import Section1 from '../../components/section-1/section-1.component.jsx';
import CreationCollection from '../../components/creation-collection/creation-collection.component'
import Footer from '../../components/footer/footer.component.jsx';

const Homepage = () => {
    return (
    <div>
        <Header />
        <Section1 />
        <CreationCollection />
        <Footer />
    </div>

    );
}

export default Homepage;