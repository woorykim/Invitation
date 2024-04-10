import { AccountNumberProps } from "../../types/ImageTypes";

export const AccountNumber: AccountNumberProps = {
  woory: {
    bride: {
      name: "김우리",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
      pay: `https://qr.kakaopay.com/FabTcgSmD`,
    },
    bride_mother: {
      name: "오영화",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_MOTHER}`,
      pay: null,
    },
    bride_father: {
      name: "김풍연",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_FATHER}`,
      pay: null,
    },
  },
  eunsa: {
    bridegroom: {
      name: "이은사",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
      pay: `https://qr.kakaopay.com/FabTcgSmD `,
    },
    bridegroom_mother: {
      name: "옹영심",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_MOTHER}`,
      pay: null,
    },
    bridegroom_father: {
      name: "이창건",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_FATHER}`,
      pay: null,
    },
  },
};
