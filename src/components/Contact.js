import React from 'react';

const Contact = () => {
  return (
    <section className="bg-light text-center py-5">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="mx-auto mt-4" style={{ maxWidth: '500px' }}>
          <input className="form-control mb-3" type="text" placeholder="Name" />
          <input className="form-control mb-3" type="email" placeholder="Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-primary w-100">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
