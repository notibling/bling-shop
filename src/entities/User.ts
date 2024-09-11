

type Sex = 'male' | 'female' | null;
type UserType = 'client' | 'business' | null;

interface IUser {
  id: number;
  firstName: string;
  lastName: string | null;
  email: string;
  password: string;

  type: UserType;
  sex: Sex;
  birth: Date | null;
  country: string | null;
  residenceCountry: string | null;
  legalIdentification: string | null;
  profileImage: string | null;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
}
export { type IUser };