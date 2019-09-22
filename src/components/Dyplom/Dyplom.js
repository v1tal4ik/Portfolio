import React, {Fragment} from 'react';
import Rodal from 'rodal';
import ModalDyplom from './ModalDyplom';
import 'rodal/lib/rodal.css';
import './style.css';


export default class Dyplom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            isOpen:false,
            img:'',
        };
    }

    showDyplom=(e)=>{
        this.setState({
            visible:true,
            isOpen:true,
            img:e.target.src
        });
    }

    handleClose=()=>{
        this.setState({
            visible:false,
            isOpen:false
        });
    }


    render(){
        const { isOpen, img } = this.state;
        return (
            <Fragment>
            <div className="dyplom" id="certificates">
                <div className="dyplom-block">
                    <img src={'../../img/duploms/duplom-1-en.png'} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                    <img src={'../../img/duploms/duplom-2-en.png'} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                    <img src={'../../img/duploms/duplom-3-en.png'} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                </div>

            </div>
            <Rodal visible={this.state.visible} onClose={this.handleClose.bind(this)} animation="rotate">
                <ModalDyplom 
                    open={isOpen}
                    onClose={this.handleClose}
                    img = {img}
                />
            </Rodal>
        </Fragment>
        )
    }
}