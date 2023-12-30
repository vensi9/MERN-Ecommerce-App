import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate()
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changedHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };


  return (
    <div className="shipping">
      <button className="back-btn"
        onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form>
        <h1>Shipping Info</h1>
        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changedHandler}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changedHandler}
        />
        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changedHandler}
        />

        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changedHandler}
        >
          <option value="">Choose Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
        </select>

        <input
          required
          type="text"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changedHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping