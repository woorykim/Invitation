import { AccountNumberProps } from "../../types/ImageTypes";

export const AccountNumber: AccountNumberProps = {
  woory: {
    bride: {
      name: "김우리",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
    },
    bride_mother: {
      name: "오영화",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_MOTHER}`,
    },
    bride_father: {
      name: "김풍연",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE_FATHER}`,
    },
  },
  eunsa: {
    bridegroom: {
      name: "이은사",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDE}`,
    },
    bridegroom_mother: {
      name: "옹영심",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_MOTHER}`,
    },
    bridegroom_father: {
      name: "이창건",
      bank: "카카오뱅크",
      accountNumber: `${process.env.REACT_APP_ACCOUNT_NUMBER_BRIDEGROOM_FATHER}`,
    },
  },
};
