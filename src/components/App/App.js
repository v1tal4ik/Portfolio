import React,{Fragment} from 'react';
import { Lines } from 'react-preloaders';
import TopHeader from '../TopHeader';
import ButtonToTop from '../ButtonToTop';
import WelcomePage from '../WelcomePage';
import Resume from '../Resume';
import Dyplom from '../Dyplom';
import Works from '../Works';
import Feedback from '../Feedback';
import Footer from '../Footer';

const App = () => (
    <Fragment>
        <Lines />
        <TopHeader />
        <ButtonToTop />
        <WelcomePage />
        <Resume />
        <Dyplom />
        <Works />
        <Feedback />
        <Footer />
    </Fragment>
)

export default App;
