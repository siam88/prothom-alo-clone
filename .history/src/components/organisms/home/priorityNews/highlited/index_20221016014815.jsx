import React from "react";

const Highlighted = ({content}) => {
  return (
    <div className="highlighted">
      <h2 className="highlightedTitle">{content.name}</h2>
      <div className="topHighlighted">
        <img
          src={content.items[0].thumb}
          alt={content.items[0].headline}
        />
        <h3 class="first-txt"> {content.items[0].headline}</h3>
      </div>
      <div className="smallImage imgLft">
        <img
          src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Fc90e67fd-1a19-4724-a578-96b83facd017%2FCRICKET_AUS_WC_T20_033629.jpg?rect=0%2C0%2C5072%2C3381&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
          alt="hello"
        />
        <p> পাকিস্তান ম্যাচের জন্য ভারতের একাদশ চূড়ান্তপাকিস্তান ম্যাচের জন্য ভারতের একাদশ চূড়ান্তপাকিস্তান ম্যাচের জন্য ভারতের একাদশ চূড়ান্ত</p>
      </div>
      <div className="smallImage imgRgt">
        <img
          src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Fc90e67fd-1a19-4724-a578-96b83facd017%2FCRICKET_AUS_WC_T20_033629.jpg?rect=0%2C0%2C5072%2C3381&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
          alt="hello"
        />
      </div>
    </div>
  );
};

export default Highlighted;
