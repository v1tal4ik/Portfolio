import React,{Fragment} from 'react';
import TopHeader from '../TopHeader';
import ButtonToTop from '../ButtonToTop';
import WelcomePage from '../WelcomePage';
import Resume from '../Resume';
import Dyplom from '../Dyplom';
import Works from '../Works';
import Feedback from '../Feedback';
import Footer from '../Footer';

export default class App extends React.Component{
    render(){
          return (
            <Fragment>
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
    }
}