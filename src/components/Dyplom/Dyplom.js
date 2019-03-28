import React, {Fragment} from 'react';
import Rodal from 'rodal';
import {Select } from 'antd';
import ModalDyplom from './ModalDyplom';
import './antd-select.css'
import 'rodal/lib/rodal.css';
import './style.css';

const Option = Select.Option

export default class Dyplom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            isOpen:false,
            img:'',
            language:'ua'
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

    handleLanguageChange=(e)=>{
        console.log(e);
        this.setState({
            language:e
        });
    }

    render(){
        const {isOpen,img,language} = this.state;
        const srcJS = `../../img/duploms/duplom-1-${language}.png`
        const srcReact = `../../img/duploms/duplom-2-${language}.png`
        const srcNode = `../../img/duploms/duplom-3-${language}.png`
        console.log(srcJS);
        return (
            <Fragment>
            <div className="dyplom" id="certificates">
                <div className="dyplom-block">
                    <img src={srcJS} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                    <img src={srcReact} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                    <img src={srcNode} alt="Sertificate" onClick={this.showDyplom.bind(this)}/>
                </div>
                <Select 
                        optionFilterProp="children"
                        className = 'dyplom-select-block'
                        defaultValue = 'UA'
                        onChange={this.handleLanguageChange}
                    >
                        <Option key ='UA' value='ua'>UA</Option>
                        <Option key ='RU' value='ru'>RU</Option>
                        <Option key ='EN' value='en'>EN</Option>
                </Select>
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