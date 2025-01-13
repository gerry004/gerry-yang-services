function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary py-12">
      <h1 className="text-white p-4 text-center">Thinking of Working Together?</h1>
      <p className="text-white text-center p-4 md:max-w-[40%]">
        I'm always looking for new opportunities and projects to work on. If you
        have an idea or a project you'd like to collaborate on, I'd love to hear
        about it!
      </p>
      <a
        href="https://calendly.com/gerryyang/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-white text-primary text-xl font-bold py-3 px-5 rounded-lg hover:bg-opacity-80 my-4
        shadow-lightgray shadow-md hover:shadow-lightgray hover:shadow-lg hover:-translate-y-1"
        >
          Let's Chat!
        </button>
      </a>
    </div>
  );
}

export default Contact;
