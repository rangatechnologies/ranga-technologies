import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function LoginView(props: {
  show: boolean;
  page: number;
  close: (value: boolean) => void;
  setTabIndex: (value: number) => void;
}) {
  const { close, page, setTabIndex, show } = props;
  if (!show) {
    return <div />;
  }

  const TabButton = (props: { text: string; value: number }) => (
    <button
      className={
        "text-text font-black text-2xl uppercase border-b-4 " +
        (page === props.value
          ? "border-primary"
          : "border-whitebord text-colorid4e749ecb")
      }
      onClick={() => setTabIndex(props.value)}
    >
      {props.text}
    </button>
  );

  const login = (
    <div className="md:w-96 flex flex-col pt-12 space-y-2">
      <label className="block text-xs font-light text-text">UserName</label>
      <input
        type="text"
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        placeholder="login"
        required
      />
      <label className="block text-xs font-light text-text pt-5">
        Password
      </label>
      <input
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 pb-3 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        type="password"
        placeholder="*******"
        required
      />
      <div className="w-full pt-12 flex flex-row justify-between">
        <div className="flex justify-center items-center text-center flex-row">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label className="text-text text-sm pl-4"> Remember me</label>
        </div>
        <button className="text-xl uppercase bg-primary text-colorid3b2eb70d font-black px-5 py-2">
          Login
        </button>
      </div>
      <div className="text-text text-lg h-12" />
    </div>
  );
  const signup = (
    <div className="flex md:w-96 flex-col pt-12 space-y-2 ">
      <label className="block text-xs font-light text-text">UserName</label>
      <input
        type="text"
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 py-4 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        placeholder="login"
        required
      />
      <label className="block text-xs font-light text-text pt-5">Email</label>
      <input
        id="first_name"
        className=" transition-all outline-none focus:ring-0 border-b-2 pb-3 text-lg focus:border-opacity-100 border-opacity-30 border-text w-full"
        type="email"
        placeholder="@"
        required
      />
      <div className="w-full pt-12 flex flex-row justify-between">
        <div className="flex justify-center items-center text-center flex-row">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label className="text-text text-sm pl-4 w-48 text-start">
            {" "}
            I've read and agree with{" "}
            <a className="text-primary" href="https://aleeert.com/terms/">
              Terms of Use
            </a>
          </label>
        </div>
        <button className="text-xl uppercase bg-primary text-colorid3b2eb70d font-black px-5 py-2">
          Register
        </button>
      </div>
      <div className="text-text text-lg pt-5 w-full text-center">
        Password will be e-mailed to you
      </div>
    </div>
  );
  return (
    <div className="w-screen z-50 h-screen fixed bg-whitebord animate-slow-apear">
      <div className="w-full flex justify-end text-colorid4e749ecb pt-3 pr-3">
        <FontAwesomeIcon
          icon={faClose}
          onClick={() => close(false)}
          className="h-6"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center ">
        <div className=" flex flex-row space-x-16 px-22">
          <TabButton text="Login" value={0} />
          <TabButton text="Sign Up" value={1} />
        </div>
        {page === 1 ? signup : login}
      </div>
    </div>
  );
}
