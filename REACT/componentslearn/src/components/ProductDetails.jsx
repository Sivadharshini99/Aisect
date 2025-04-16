import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../App";
const ProductDetails = ({
  deepName = "Realme",
  deepPrice = 3500,
  deepDescription = "12Gb with 8gb",
}) => {
  //default props
  // console.log(props);
  // let receivedValue=useContext(UserContext);
  // console.log(receivedValue);
  let { user } = useContext(UserContext);
  // console.log(user);

  return (
    <div>
      <section>
        <article>
          <h1>UserName:{user.uName}</h1>
          <h1>Age:{user.age}</h1>
          <h1>Email:{user.email}</h1>
        </article>
        <h3>{deepName}</h3>
        <h6>{deepPrice}</h6>
        <p>{deepDescription}</p>
      </section>
    </div>
  );
};

export default ProductDetails;
//defaultprops
// ProductDetails.defaultProps = {
//   deepName: "Realme",
//   deepPrice: 35000,
//   deepDescription: "12Gb",
// };

//proptype-typechecking
ProductDetails.propTypes = {
  deepName: PropTypes.string.isRequired,
  deepPrice: PropTypes.number.isRequired,
  deepDescription: PropTypes.string.isRequired,
};
