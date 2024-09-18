const Faq = () => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8 md:py-16">
      <div className="mb-8 text-center md:text-left">
        <span className="text-[#494759] text-xl block font-bold">FAQ</span>
        <h1 className="text-[#494759] text-3xl md:text-5xl font-bold mt-4">
          Frequently Asked <br className="hidden md:block" /> Questions
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="bg-[#E6F1FF] rounded-lg py-10 px-16 text-[#494759]">
          <h1 className="mb-2 text-4xl font-semibold">
            How do I register and set up my profile on the app?
          </h1>
          <p className="mt-10 text-xl font-semibold">
            Register by entering your basic info and navigate to
            &quot;Profile&quot; to update your preferences
          </p>
        </div>
        <div className="rounded-lg bg-gradient-to-b   text-xl from-[#DAC2FC] to-[#98C5FC] py-10 px-16 text-white">
          <h1 className="mb-2 text-4xl font-semibold ">
            How can I use the search and booking features in the app?
          </h1>
          <p className="mt-10 text-xl font-semibold">
            Use the &quot;Find&quot; Spot button to locate and instantly book
            experiences from list or map views.
          </p>
        </div>
        <div className="py-10 px-16 rounded-lg bg-gradient-to-b text-xl from-[#DAC2FC] to-[#98C5FC] text-white">
          <h1 className="mb-2 text-4xl font-semibold">
            How do I manage my bookings and loyalty rewards?
          </h1>
          <p className="mt-10 text-xl font-semibold">
            View and manage your bookings and rewards in &quot;My Leisure&quot;
            and &quot;Loyalty&quot; sections, respectively.
          </p>
        </div>
        <div className="bg-[#E6F1FF] py-10 px-16 rounded-lg text-[#494759]">
          <h1 className="mb-2 text-4xl font-semibold">
            What should I do if I need assistance or have technical issues?
          </h1>
          <p className="mt-10 text-xl font-semibold">
            Access the &quot;Support&quot; section to chat with our support team
            for any assistance needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
