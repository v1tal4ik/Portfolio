import React ,{Fragment}from 'react';
import axios from 'axios';
import Rodal from 'rodal';
import ModalFeedback from './ModalFeedback'
import './style.css';

export default class ContactMe extends React.Component{

    state = {
        name:'',
        email:'',
        errorEmail:'',
        phone:'',
        errorPhone:'',
        message:'',
        close:'',
        counter:0,
        response:'',
        class:"wrap-form",
        visible:false,
        isOpen:false,
        height:150,
        clearAll:true
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        });
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        });
    }

    checkedEmail=(e)=>{
        const re = /@/;
        if(e.target.value.search(re)=== -1){
            this.setState({
                errorEmail:'* Your email should contain symbol "@"'
            })
        }else{
            this.setState({
                errorEmail:''
            })
        }
    }

    handlePhone=(e)=>{
        const re = /[0-9]/gi;
        const {counter,phone}=this.state;
        if(e.key.search(re)===0 && counter <=11){
            let arr = [];
                if(counter === 0){arr[0]=e.key}else{arr[0]=phone[0]};
                if(counter === 1){arr[1]=e.key}else{arr[1]=phone[1]};
                if(counter === 2){arr[2]= ' '; arr[3]= '('; arr[4]=e.key}else{arr[4]=phone[4]}
                if(counter === 3){arr[2]= ' '; arr[3]= '(';arr[5]=e.key}else{arr[5]=phone[5]};
                if(counter === 4){arr[2]= ' '; arr[3]= '(';arr[6]=e.key}else{arr[6]=phone[6]}
                if(counter === 5){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[9]=e.key}else{arr[9]=phone[9]};
                if(counter === 6){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[10]=e.key}else{arr[10]=phone[10]};
                if(counter === 7){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[11]=e.key}else{arr[11]=phone[11]};
                if(counter === 8){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[12]='-';arr[13]=e.key}else{arr[13]=phone[13]};
                if(counter === 9){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[12]='-';arr[14]=e.key}else{arr[14]=phone[14]};
                if(counter === 10){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[12]='-';arr[15]='-';arr[16]=e.key}else{arr[16]=phone[16]};
                if(counter === 11){arr[2]= ' '; arr[3]= '(';arr[7]=')';arr[8]=' ';arr[12]='-';arr[15]='-';arr[17]=e.key}else{arr[17]=phone[17]};
                const number = arr.join('');
                this.setState({
                phone:number,
                counter:counter+1,
                errorPhone:'',
                close:'x'
                });
        }else{
            if(counter > 11){
                alert('Number saved');
            }
            if(counter <11){
                this.setState({
                    errorPhone:'* Input only number'
                });
            }
        }
    }
    inputValidNumber=(e)=>{};

    onClear=()=>{
        this.setState({
            counter:0,
            phone:'',
            close:''
        })
    }

    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        });
    }
    handleSend=(e)=>{
        this.setState({class:"wrap-form wait"})
        const {name,email,phone,message,errorEmail,errorPhone} = this.state;
        if(errorEmail !=='' || errorPhone !==''){
            e.preventDefault();
            this.setState({
                response:'Fill in all fields correct, please!',
                clearAll:false
            });
            this.showFeedback();
        }else{
            // eslint-disable-next-line
            if(name!=='' && email!=='' && phone!=='' && message!=='' && errorEmail =='' && errorPhone ==''){
                e.preventDefault();
                axios.post('/send-message',{
                    name:name,
                    email:email,
                    phone:phone,
                    message:message
                })
                .then((response)=>{
                    this.setState({
                        response:response.data,
                        class:"wrap-form",
                        clearAll:true
                    });
                    this.showFeedback();
                  })
                  .catch((error)=>{
                    this.setState({
                        response:error,
                        class:"wrap-form",
                        clearAll:true
                    });
                    this.showFeedback();
                  });
            }
        }
        
    }

    showFeedback=()=>{
        this.setState({
            visible:true,
            isOpen:true,
        })
    };

    handleCloseFeedback=()=>{
        if(this.state.clearAll){
            this.setState({
                name:'',
                email:'',
                phone:'',
                message:'',
                close:'',
                counter:0,
                response:'',
                visible:false,
                isOpen:false,
            });
        }else{
            this.setState({
                visible:false,
                isOpen:false,
            })
        }
    }

    render(){
        return (
            <Fragment>
                <div className={this.state.class}>
                    <div className="feedback-title" >
                        <p className="write-me">Write email</p>
                        <p className="some-question">if you have any question</p>
                    </div>
                    <form className="feedback-form">
                        <div className="wrap-inpt">
                            <label htmlFor="name" className="label-form">Name *</label>
                            <input type="text" className="feedback-inp" placeholder="Your name" value={this.state.name} onChange={this.handleName} required/>
                        </div>
                        <div className="wrap-inpt">
                            <label htmlFor="name" className="label-form">Email *</label>
                            <input type="text" className="feedback-inp" placeholder="Your Email" value={this.state.email} 
                            onChange={this.handleEmail} onBlur={this.checkedEmail} required />
                            <p className='feedback-form-error'>{this.state.errorEmail}</p>
                        </div>
                        <div className="wrap-inpt">
                            <label htmlFor="name" className="label-form">Number *</label>
                            <input type="text" className="feedback-inp" placeholder="38 (ХХХ)ХХХ-ХХ-ХХ" 
                            onKeyPress={this.handlePhone} onChange={this.inputValidNumber}  value={this.state.phone} required />
                            <span className='clearPhone' onClick={this.onClear}>{this.state.close}</span>
                            <p className='feedback-form-error'>{this.state.errorPhone}</p>
                        </div>
                        <div className="wrap-inpt">
                        <p htmlFor="name" className="label-form exept">Message:</p>
                            <textarea className="feedback-inp" name="text" id="" cols="30" rows="8" placeholder="Your message" onChange={this.handleMessage} value={this.state.message} required></textarea>
                        </div>
                        <button className="feedback-form-btn" onClick={this.handleSend} >
                            <span> 
                                Send
                                <i className="fab fa-telegram-plane"></i>
                            </span>
                        </button>
                    </form>
                </div>
            <Rodal visible={this.state.visible} onClose={this.handleCloseFeedback.bind(this)} height={this.state.height}>
                    <ModalFeedback
                        open={this.state.isOpen}
                        onClose = {this.handleCloseFeedback} 
                        text ={this.state.response}
                    />
                </Rodal>
            </Fragment>
           
        )
    }
}