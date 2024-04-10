import { AccountNumberProps } from "../../types/ImageTypes";

export const AccountNumber: AccountNumberProps = {
  woory: {
    bride: {
      name: "신부",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
      pay: `https://qr.kakaopay.com/FabTcgSmD`,
    },
    bride_mother: {
      name: "신부 아버지",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_MOTHER}`,
      pay: null,
    },
    bride_father: {
      name: "신부 어머니",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_FATHER}`,
      pay: null,
    },
  },
  eunsa: {
    bridegroom: {
      name: "신랑",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
      pay: `https://qr.kakaopay.com/FabTcgSmD `,
    },
    bridegroom_mother: {
      name: "신랑 아버지",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_MOTHER}`,
      pay: null,
    },
    bridegroom_father: {
      name: "신랑 어머니",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_FATHER}`,
      pay: null,
    },
  },
};
