const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact me: <a href="mailto:hello@blue-meringue.co.uk">hello@blue-meringue.co.uk</a>
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
