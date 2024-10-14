export interface CustomerInfo {
    name: string;
    id: string;
    billingAddress: string;
    shippingAddress: string;
  }
  
export interface CompanyInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
  }
  
export interface InvoiceInfo {
    number: string;
    date: string;
    warrantyPeriod: string;
    paymentMethod: string;
  }
  