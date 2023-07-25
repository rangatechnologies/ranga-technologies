import { faClose, faEnvelope, faFaceGrimace, faMessage, faNewspaper, faPaperPlane, faPhone, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactUsView(props: {
  show: boolean;
  page: number;
  close: (value: boolean) => void;
  setTabIndex: (value: number) => void;
}) {
    
  const form = useRef();
  function sendEmail(e:React.ChangeEvent<any>) {
    e.preventDefault();
    console.log(e)
    console.log('yes')

    emailjs.sendForm('service_4k82cka', 'template_byynhiv', e.target, 'gaqGTO4QeTp3vqL3X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  const { close, page, setTabIndex, show } = props;
  if (!show) {
    return <div />;
  }

  const TabButton = (props: { text: string; value: number }) => (
    <button
      className={
        "text-text font-black text-sm md:text-lg uppercase border-b-4 " +
        (page === props.value
          ? "border-primary"
          : "border-whitebord text-colorid4e749ecb")
      }
      onClick={() => setTabIndex(props.value)}
    >
      {props.text}
    </button>
  );
  
  const requestDemo = (
    <div className="flex px-4 flex-col pt-12 space-y-2 animate-slow-apear">
          <div>


            
            <div className="container">

            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full" placeholder="Name" name="user_name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full" placeholder="Email Address" name="user_email"/>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="text-xl uppercase rounded-md bg-text hover:bg-primary transition-all text-colorid3b2eb70d font-black px-5 py-2" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>

      {/* <label className="block text-xs font-light text-text">Your Name</label>
      <input
        type="text"
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        placeholder="Joe"
        required
      />
      <label className="block text-xs font-light text-text pt-5">Email</label>
      <input
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 pb-3 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        type="email"
        placeholder="your@email.com"
        required
      />
      <div className="w-full  pt-6 flex flex-row justify-center">
        <button className="text-xl uppercase rounded-md bg-text hover:bg-primary transition-all text-colorid3b2eb70d font-black px-5 py-2">
          <FontAwesomeIcon icon={faMessage} className="pr-2" />
          Request
        </button>
      </div> */}
      <div className="text-text text-sm pt-5 w-full text-center">
        We will send you the further instructions
      </div>
    </div>
  );

const contactUs =
(
  <div className="flex px-4 flex-col pt-12 space-y-2 animate-slow-apear">
        <div>


          
          <div className="container">

          <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full" placeholder="Name" name="user_name"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full" placeholder="Email Address" name="user_email"/>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="text-xl uppercase rounded-md bg-text hover:bg-primary transition-all text-colorid3b2eb70d font-black px-5 py-2" value="Subscribe"></input>
                      </div>
                  </div>
              </form>
          </div>
      </div>

    {/* <label className="block text-xs font-light text-text">Your Name</label>
    <input
      type="text"
      id="first_name"
      className=" transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
      placeholder="Joe"
      required
    />
    <label className="block text-xs font-light text-text pt-5">Email</label>
    <input
      id="first_name"
      className=" transition-all outline-none focus:ring-0 border-b-2 pb-3 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
      type="email"
      placeholder="your@email.com"
      required
    />
    <div className="w-full  pt-6 flex flex-row justify-center">
      <button className="text-xl uppercase rounded-md bg-text hover:bg-primary transition-all text-colorid3b2eb70d font-black px-5 py-2">
        <FontAwesomeIcon icon={faMessage} className="pr-2" />
        Request
      </button>
    </div> */}
    <div className="text-text text-sm pt-5 w-full text-center">
      We will send you the further instructions
    </div>
  </div>
);

  // const contactUs = (
  //   <div className="flex px-4 flex-col pt-12 space-y-2 animate-slow-apear">
  //     <label className="block text-xs font-light text-text">Social Network</label>
  //     <div className="flex w-full flex-row text-colorid3b2eb70d items-center justify-center space-x-6">
  //       <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPhone} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" />
  //       <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faPaperPlane} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" />
  //       <FontAwesomeIcon onClick={() => window.open("www.google.com")} icon={faEnvelope} className="transition-all cursor-pointer bg-text rounded-lg p-4 h-7 hover:bg-primary" />
      
  //     </div>
  //     <label className="block text-xs font-light text-text pt-5">Subscribe to Newsletter</label>
  //     <input
  //       id="first_name"
  //       className=" transition-all outline-none focus:ring-0 border-b-2 pb-3 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
  //       type="email"
  //       placeholder="your@email.com"
  //       required
  //     />
  //     <div className="w-full  pt-6 flex flex-row justify-center">
  //       <button className="text-lg uppercase rounded-md bg-text hover:bg-primary transition-all text-colorid3b2eb70d font-black px-5 py-2">
  //         <FontAwesomeIcon icon={faNewspaper} className="pr-2" />
  //         Subscribe
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-screen z-50 h-screen fixed bg-opacity-90 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-whitebord h-fit w-fit p-4 transition-all max-w-sm rounded-lg  shadow-xl animate-slow-apear">
        <div className="w-full flex justify-end text-colorid4e749ecb hover:text-colorid3b2eb70d cursor-pointer" >
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => close(false)}
            className="h-6"
          />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center ">
          <div className=" flex flex-row space-x-4 px-22">
            <TabButton text="Request a Demo" value={0} />
            <TabButton text="Contact Us" value={1} />
          </div>
          {page === 1 ? contactUs : requestDemo}
        </div>
      </div>
    </div>
  );
}
