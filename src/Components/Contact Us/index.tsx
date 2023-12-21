import "./index.css";
const index = () => {
  return (
    <div className="mt-5 sm:mt-32  py-10 px-4 sm:px-0  bg-blue-20">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/**left div */}
        <div className="flex items-center justify-center">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="uppercase text-xs font-semibold tracking-wider text-red-20">
                contact our office at hyderabad
              </p>
              <h1 className="capitalize font-medium tracking-wide text-slate-200 text-lg">
                get in touch with us
              </h1>
            </div>
            <form action="" className="space-y-5">
              <input type="text " placeholder="Mention First and Last Name" />
              <div className="grid grid-cols-2 gap-3">
                <input type="email" placeholder="Your Email Address*" />
                <input type="number" placeholder="Your Phone Number*" />
              </div>
              <textarea
                name=""
                id=""
                cols={40}
                rows={5}
                placeholder="Please Leave a brief message "
              ></textarea>
            </form>
            <button className="px-7 py-1 rounded-sm font-semibold tracking-wide text-slate-200 bg-red-20 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
        {/** Right div map */}
        <div className="hidden sm:block relative z-10">
          <div className="google-map absolute -top-32 left-0 right-0 mx-auto ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.620948537137!2d78.52030422337639!3d17.42996926819595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997e412a1e51%3A0x5c58e09b17a241f1!2sIRISET%2C%20Mettuguda%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703070265805!5m2!1sen!2sin"
              width={600}
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
