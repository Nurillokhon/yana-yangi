import React from "react";

const Header = () => {
  return (
    <div>
      <div>
      <div className="row row1 g-0  align-item-center">
        <div className="col-6  col1">
          <h1 className="fw-bold">Bookstore</h1>
          <h6>The World Of Books. Book is a source of knowledge</h6>
          <h6>In our store you can find a book for every taste. <br /> A large assortment.  Pleasant prices. Interesting <br /> stories.</h6>
        </div>
        <div className="col-6">
          <img src="https://www.linkpicture.com/q/image-1_186.png" alt="rasm" />
        </div>
      </div>
      </div>     
      <div style={{ marginTop: "150px",}} className="d-flex justify-content-around align-items-center py-2">
        <h3 className="fw-bold ">Hot arrivals</h3>
        <div className="d-flex">
          <h6 className="px-4 hover1 hots">Fantastic</h6>
          <h6 className="px-4 hover1 hots">Self-development</h6>
          <h6 className="px-4 hover1 hots">Detectives</h6>
          <h6 className="px-4 hover1 hots">Baby</h6>
          <h6 className="px-4 hover1 hots">Audiobooks</h6>
          <h6 className="px-4 hover1 hots">Other</h6>
        </div>
      </div>
      <div>
    </div>
    </div>
  );
};

export default Header;
