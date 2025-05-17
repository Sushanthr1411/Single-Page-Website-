import React from 'react';

const Services = () => {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container text-center">
        <h2>Our Services</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-dark rounded">Web Design</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-dark rounded">React Development</div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="p-4 bg-dark rounded">UI/UX Consulting</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
