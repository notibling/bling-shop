interface IUserShipping {
  id: string;
  country: string;
  province: string;
  description: string;
  city: string;
  postalCode: string;
  street1: string;
  street2: string;
  streetCorner: string;
  solar: string;
  doorNumber: string;
  apartmentNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export { type IUserShipping }