import { AccountNumberProps } from "../../types/ImageTypes";

/**
 * @title Account Number 객체
 */
export const AccountNumber: AccountNumberProps = {
  woory: {
    bride: {
      name: "신부",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
      pay: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_PAY}`,
    },
    bride_mother: {
      name: "김풍연",
      bank: "신한은행",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_FATHER}`,
      pay: null,
    },
    bride_father: {
      name: "오영화",
      bank: "신한은행",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_MOTHER}`,
      pay: null,
    },
  },
  eunsa: {
    bridegroom: {
      name: "신랑",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM}`,
      pay: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_PAY}`,
    },
    bridegroom_mother: {
      name: "이창건",
      bank: "농협은행",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_FATHER}`,
      pay: null,
    },
    bridegroom_father: {
      name: "옹영신",
      bank: "국민은행",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_MOTHER}`,
      pay: null,
    },
  },
};
