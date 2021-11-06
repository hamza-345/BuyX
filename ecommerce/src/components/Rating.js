import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ value, numReviews }) => {
  return (
    <>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1
              ? "star"
              : value >= 0.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1
              ? "star"
              : value >= 0.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1
              ? "star"
              : value >= 0.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        ></FontAwesomeIcon>
      </span>
      <span>
        <FontAwesomeIcon
          icon={
            value >= 1
              ? "star"
              : value >= 0.5
              ? "star-half-alt"
              : ["far", "star"]
          }
        ></FontAwesomeIcon>
      </span>
      <span className="px-1">{numReviews} reviews</span>
    </>
  );
};

export default Rating;
