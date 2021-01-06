import React, { useContext } from "react";
import { withTheme } from "styled-components";
import AppContext from "../../state/AppContext";

import SelectedCustomerInfoStyled from "./SelectedCustomerInfoStyled";
import CustomerInfo from "../../Presentational/CustomerInfo";

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
  return (
    <SelectedCustomerInfoStyled
      theme={theme}
      onClick={e => e.stopPropagation()}
    >
      <span
        className="customer--modal__close"
        onClick={() => updateApp("selectedCustomer", {})}
      >
        x
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
          <CustomerInfo label="last delivery" value={last_delivery_date} />
          <button className="default__button">add note</button>
          <CustomerInfo label="may orders" value={orders_this_month} />
          <CustomerInfo label="total sales" value="$0.01" />
        </div>
      </div>
    </SelectedCustomerInfoStyled>
  );
};

export default withTheme(SelectedCustomerInfo);
