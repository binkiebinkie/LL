import React, { useContext } from "react";
import { withTheme } from "styled-components";
import AppContext from "../../state/AppContext";
import moment from "moment";

import SelectedCustomerInfoStyled from "./SelectedCustomerInfoStyled";
import CustomerInfo from "../../Presentational/CustomerInfo";
import ic_clear_black_24px from "../../assets/ic_clear_black_24px.svg";

const SelectedCustomerInfo = ({
  theme,
  selectedCustomer: { city, province, customer_info, business_name },
  updateApp
}) => {
  const {
    last_delivery_date,
    buyer_average_order,
    orders_this_month
  } = customer_info;

  // TODO: change close button to SVG
  return (
    <SelectedCustomerInfoStyled
      theme={theme}
      onClick={e => e.stopPropagation()}
    >
      <span
        className="customer--modal__close"
        onClick={() => updateApp("selectedCustomer", {})}
      >
        <img src={ic_clear_black_24px} alt="close modal" />
      </span>
      <h2 className="customer--modal__business-name">{business_name}</h2>
      <div className="customer--modal__info--container">
        <div className="customer--modal__info">
          <CustomerInfo label="location" value={`${city}, ${province}`} />
          <CustomerInfo label="product catalog" value="select" />
          <button className="default__button">send catalog</button>
          <CustomerInfo label="average order" value={buyer_average_order} />
          <CustomerInfo label="may sales" value="$0.01" />
        </div>
        <div className="customer--modal__info">
          <CustomerInfo label="phone" value={"(123) 456-7890"} />
          <CustomerInfo
            label="last delivery"
            value={moment(last_delivery_date).format("MMMM Do YYYY")}
          />
          <button className="default__button secondary">add note</button>
          <CustomerInfo label="may orders" value={orders_this_month} />
          <CustomerInfo label="total sales" value="$0.01" />
        </div>
      </div>
    </SelectedCustomerInfoStyled>
  );
};

export default withTheme(SelectedCustomerInfo);
