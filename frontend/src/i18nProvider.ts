//Source code generated by AppGPT (www.appgpt.tech)
import { mergeTranslations } from 'ra-core';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import enOriginal from 'ra-language-english';
import frOriginal from 'ra-language-french';

const enResources = {
  resources: {
    Users: {
      name: 'Users',
      fields: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        phoneNumber: 'Phone Number',
        address: 'Address',
        accountId: 'Account Id',
        transactionLimit: 'Transaction Limit',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions',
      fields: {
        transactionId: 'Transaction Id',
        senderId: 'Sender Id',
        receiverId: 'Receiver Id',
        amount: 'Amount',
        transactionDate: 'Transaction Date',
        status: 'Status',
        scannedData: 'Scanned Data',
        dateOfScan: 'Date Of Scan',
        deviceUsedForScanning: 'Device Used For Scanning',
        id: 'id',
      },
    },
    Accounts: {
      name: 'Accounts',
      fields: {
        accountId: 'Account Id',
        userId: 'User Id',
        accountBalance: 'Account Balance',
        accountType: 'Account Type',
        creationDate: 'Creation Date',
        id: 'id',
      },
    },
    PaymentMethods: {
      name: 'Payment Methods',
      fields: {
        methodId: 'Method Id',
        userId: 'User Id',
        methodType: 'Method Type',
        details: 'Details',
        id: 'id',
      },
    },
  },
};
const frResources = {
  resources: {
    Users: {
      name: 'Users (fr)',
      fields: {
        name: 'Name (fr)',
        email: 'Email (fr)',
        password: 'Password (fr)',
        phoneNumber: 'Phone Number (fr)',
        address: 'Address (fr)',
        accountId: 'Account Id (fr)',
        transactionLimit: 'Transaction Limit (fr)',
        id: 'id',
      },
    },
    Transactions: {
      name: 'Transactions (fr)',
      fields: {
        transactionId: 'Transaction Id (fr)',
        senderId: 'Sender Id (fr)',
        receiverId: 'Receiver Id (fr)',
        amount: 'Amount (fr)',
        transactionDate: 'Transaction Date (fr)',
        status: 'Status (fr)',
        scannedData: 'Scanned Data (fr)',
        dateOfScan: 'Date Of Scan (fr)',
        deviceUsedForScanning: 'Device Used For Scanning (fr)',
        id: 'id',
      },
    },
    Accounts: {
      name: 'Accounts (fr)',
      fields: {
        accountId: 'Account Id (fr)',
        userId: 'User Id (fr)',
        accountBalance: 'Account Balance (fr)',
        accountType: 'Account Type (fr)',
        creationDate: 'Creation Date (fr)',
        id: 'id',
      },
    },
    PaymentMethods: {
      name: 'Payment Methods (fr)',
      fields: {
        methodId: 'Method Id (fr)',
        userId: 'User Id (fr)',
        methodType: 'Method Type (fr)',
        details: 'Details (fr)',
        id: 'id',
      },
    },
  },
};

const en = mergeTranslations(enOriginal, enResources);
const fr = mergeTranslations(frOriginal, frResources);

const translations = { en, fr };
export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  'en', //default locale
  [
    { locale: 'en', name: 'English' },
    { locale: 'fr', name: 'Français' },
  ],
);