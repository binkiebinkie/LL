import styled from "styled-components";

const SelectedCustomerInfoStyled = styled.div`
  position: relative;
  min-width: 700px;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.pureWhite};
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

  .customer--modal {
    &__close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
    }

    &__info {
      width: 49%;

      &--container {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        border-top: 1px solid ${props => props.theme.G2};
        border-bottom: 1px solid ${props => props.theme.G2};
      }

      button {
        width: 100%;
        margin: 4px 0;
        font-family: "RobotoMedium", helvetica, sans-serif;
        font-weight: 500;

        &.secondary {
          background-color: ${props => props.theme.secondary};
        }
      }
    }

    &__business-name {
      margin-bottom: 12px;
      font-size: 20px;
      font-family: "RobotoMedium", helvetica, sans-serif;
      font-weight: 500;
    }
  }
`;

export default SelectedCustomerInfoStyled;
