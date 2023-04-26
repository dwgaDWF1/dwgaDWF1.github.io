import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toggle, setToggle] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "template_iaypxf9",
        form.current,
        "0k1nIk2dhcHmD9bVR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setToggle(true);
  }

  return (
    <>
      {toggle ? (
        <div className="h-[260px] flex justify-center items-center text-2xl sm:text-sm sm:text-center sm:h-[200px]">
          Thank you for contacting, you will be contacted by us within 3 days.
        </div>
      ) : (
        <div className="mx-10 py-10 sm:mx-5 sm:py-5">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center gap-8 w-3/5 mx-auto sm:w-full sm:gap-4">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="bg-transparent border-[3px] sm:border-[2px] border-[#38c3ff] rounded-lg shadow-lg outline-none p-2 h-10"
                placeholder="Name"
                type="text"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-transparent border-[3px] sm:border-[2px] border-[#38c3ff] rounded-lg shadow-lg outline-none p-2 h-10"
                placeholder="Email"
                type="email"
              />
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="bg-transparent border-[3px] sm:border-[2px] border-[#38c3ff] rounded-lg shadow-lg outline-none p-2"
                placeholder="Write Something Intresting..."
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="text-center py-10">
              <button
                type="submit"
                className="rounded-full bg-[#38c3ff] py-2 px-4 text-xl text-white shadow-xl hover:bg-white hover:border-[2px] hover:border-[#38c3ff] hover:text-[#38c3ff] focus:bg-[#38c3ff] focus:text-white transition sm:rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
