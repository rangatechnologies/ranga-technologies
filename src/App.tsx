import { faContactCard, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import NavBar from './Component/NavBar/NavBar';

import Pages from './Pages/Pages.rout';


import gmail from "../src/Imgs/SVGComponets/gmail.svg";
import telegram from "../src/Imgs/SVGComponets/telegram.svg";
import facebook from "../src/Imgs/SVGComponets/facebook.svg";
import whatsapp from "../src/Imgs/SVGComponets/whatsapp.svg";
// import fiverr from "../src/Imgs/SVGComponets/insta.svg";
import insta from "../src/Imgs/SVGComponets/insta.svg";
// import upwork from "../src/Imgs/SVGComponets/upwork.svg";


// Chanell openning

function EmailOpen(){
  window.open("https://mail.google.com/mail/u/2/#inbox")
    }
function TelegramOpen(){
  window.open("https://web.telegram.org/")
    }

function FacebookOpen(){
  window.open("https://www.facebook.com/")
    }

function FiverrOpen(){
  window.open("https://instagram.com/rangatechnologies?igshid=NGExMmI2YTkyZg==")
    }

// function UpworkOpen(){
//   window.open("https://www.upwork.com")
//     }

function WhatsAppOpen(){
  window.open("https://www.upwork.com")
    }


function App() {
  return (

    <div className='h-screen overflow-x-hidden scroll-smooth overflow-y-visible ' id="page-container">
      <div className='sticky top-0 w-full z-40'>
        <NavBar />
      </div>
      <div className='overflow-hidden h-fit'>
        <Pages />

        <div>

          
    
    {/* Start a conversation */}
    {/* <div className="  mx-auto py-8 bg-[#ffffff]"> */}
    {/* <h1 className=" text-4xl text-center font-sans font-bold ">Use Cases</h1> */}
    {/* <br /> */}

      {/* <h1 className="text-3xl font-bold mb-4">Responsive Box Design</h1> */}
      <div className=" gap-1">
        {/* Box 1 */}
       
        <div className=" drop-shadow-lg bg-blue-200 rounded-lg  p-4 bg-[#ECF2FF] " >
          <div className='mt-24 ml-2 lg:ml-14 h-60 md:h-75 lg:h-80'>
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-left font-neu mb-2">Start a</h2>
          <h2 className=" text-4xl md:text-6xl lg:text-8xl text-left font-neu mb-2">conversation</h2>
          <p className=" text-left">Get in touch with us to discuss new</p>
          <p className=" text-left">product ideas and business</p>
          <p className=" text-left">opportunities.</p>
          
          </div>

          {/* about you */}
          <div className='mt-2 ml-10 lg:mt-24 lg:ml-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
         
         <div className='col-span-1 lg:col-span-2'>
            <h2 className=" text-3xl md:text-4xl lg:text-6xl text-left font-neu mb-2">About you</h2>
         </div>   
         <div className='col-span-1 md:col-span-2 lg:col-span-3'>
      <form className=" mx-auto p-4 bg-gray-100  rounded-md">
      <div className="mb-4">

        
        <input
          placeholder="Name"
          type="text"
          id="firstName"
          name="firstName"
          className="w-full p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">

        <input
          placeholder="Email"
          type="email"
          id="email"
          className="w-full p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">

        <input
          placeholder="Phone Number"
          type="name"
          id="name"
          name="name"
          className="w-full p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>



      <button type="submit" className="transition-all transform duration-500 bg-[#ACFADF] text-white py-2 px-4 rounded-md hover:bg-[#6f3cc8]">
        Submit
      </button>
           </form>
         </div>   
 

         

          </div>

          {/* about your project */}
          <div className='mt-24 ml-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
         
         <div className='col-span-1 lg:col-span-2'>
            <h2 className=" text-3xl md:text-4xl lg:text-6xl text-left font-neu mb-2">About your project</h2>
         </div>   
         <div className='col-span-1 md:col-span-2 lg:col-span-3'>
      <form className=" mx-auto p-4 bg-gray-100  rounded-md">
      <div className="mb-4 w-auto">

        <label className='' htmlFor="">What do you want to achieve?</label>

      <select className='w-full p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md focus:outline-none focus:border-indigo-500' id="country" name="country">
      <option value="australia">Web Development</option>
      <option value="canada">Mobile APP Development</option>
      <option value="usa">Blockchain Development</option>
    </select>
        
      </div>

      {/* <!--Default disabled checkbox--> */}

<label className='' htmlFor="">What services do you need?</label>

{/* tick boxes */}
<div className=' mt-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

{/* tick box */}

<div className="transition-all duration-400 col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Web Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Trading Strategy Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Volume Bot Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}

<div className="transition-all duration-400 col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Flashloan Bot Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">MOBILE DEVELOPMENT</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>
{/* tick box */}
<div className="transition-all duration-400  col-span-1 mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <label className='' htmlFor="">Blockchain Development</label>
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent disabled:opacity-60 dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    value=""
    id="flexCheckDisabled"
    />
    
</div>

</div>

{/* tell us about your project */}
<label className='' htmlFor="">Tell us about your project</label>
<div>
<textarea className ="w-full p-2 hover:animate-pulse hover:text-2xl transition-all duration-300 rounded-md" id="subject" name="subject" placeholder="Write something.." ></textarea>


</div>
     

      <button type="submit" className="transition-all transform duration-500 bg-[#ACFADF] text-white py-2 px-4 rounded-md hover:bg-[#6f3cc8]">
        Submit
      </button>
           </form>
         </div>  


         

          </div>


          
        </div>
        </div>
        </div>

        
        {/* </div> */}



        <footer className='bg-primary w-full text-colorid4e749ecb justify-center items-center flex flex-col py-12'>
          <div className='flex ml-14 flex-col text-center items-center font-bold text-3xl'>
            
            {/* <FontAwesomeIcon icon={faTowerCell} className="h-10" /> */}
            Ranga Trading
          </div>

          <div className=' grid grid-cols-2 md:grid-cols-5 items-center w-fit justify-center mt-10 space-x-14 space-y-2'>
            <div className=' ml-14 flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={EmailOpen}  >
                        <div  className="img" >
                          <img  alt="" src={gmail} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={TelegramOpen}  >
                        <div  className="img" >
                          <img  alt="" src={telegram} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={FacebookOpen}  >
                        <div  className="img" >
                          <img  alt="" src={facebook} />
                        </div>                        
                      </button> 
            </div>

            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={FiverrOpen}  >
                        <div  className="img" >
                          <img  alt="" src={insta} />
                        </div>                        
                      </button> 
            </div>
            {/* <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={UpworkOpen}  >
                        <div  className="img" >
                          <img  alt="" src={upwork} />
                        </div>                        
                      </button> 
            </div> */}
            <div className=' flex flex-row justify-center items-center text-lg space-x-2'>
            <button className="button button1" onClick={WhatsAppOpen}  >
                        <div  className="img" >
                          <img  alt="" src={whatsapp} />
                        </div>                        
                      </button> 
            </div>
          </div>
          <div style={{fontWeight:'bold', padding:'20px', fontSize: '20px'}}>
            
            {/* <h1>Email : branganaupul@gmail.com</h1>
            <h2>Contact Number  : +94 76 9298 578</h2> */}
          </div>

        </footer>
      </div>
    </div>
  );
}

export default App;
