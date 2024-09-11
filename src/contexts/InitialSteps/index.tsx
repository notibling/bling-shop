import React, { RefObject, useCallback, useEffect, useRef } from 'react';
import * as generalOperations from '@/contexts/GlobalState/general/operations';

import { IUser } from '@/entities/User';
import { ICity, ICountryDetail, IState } from '@/entities/Country';
import { IUserShipping } from '@/entities/UserShipping';

import { usePersistState } from '@/hooks/usePersistState';
import { usePromiseState } from '@/hooks/usePromise';

import * as userOperations from '@/contexts/GlobalState/user/operations';
import { ISimpleAutocompleteRef } from '@/components/organisms';

interface IInitialStepsState {
  user: Partial<IUser>;
  userShippings: IUserShipping[];
  setUserShippings: React.Dispatch<React.SetStateAction<IUserShipping[]>>;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUser>>>;

  sync: () => Promise<boolean>;
  getCities: (state: string) => ICity[];
  countries: generalOperations.ICountry[];
  country?: ICountryDetail;
  states: IState[];

  shippingInformationStateRef: RefObject<ISimpleAutocompleteRef>;
  shippingInformationCityRef: RefObject<ISimpleAutocompleteRef>;
}

interface IInitialStepsProviderProps {
  children: React.ReactNode;
}

const Context = React.createContext<IInitialStepsState>({
  user: {},
  userShippings: [],
  setUserShippings: () => { },
  setUser() { },
  getCities: () => [],
  sync: async () => { return true; },
  countries: [],
  country: undefined,
  states: [],
  shippingInformationStateRef: {} as any,
  shippingInformationCityRef: {} as any,
})


const InitialStepsProvider: React.FC<IInitialStepsProviderProps> = ({ children }) => {
  const [user, setUser] =
    usePersistState<Partial<IUser>>('@initialSteps.user', {});
  const [userShippings, setUserShippings] =
    usePersistState<IUserShipping[]>('@initialSteps.userShippings', []);


  const shippingInformationStateRef = useRef<ISimpleAutocompleteRef>(null);
  const shippingInformationCityRef = useRef<ISimpleAutocompleteRef>(null);

  const { result: gettedUserData } =
    usePromiseState(async () => {
      const response = await userOperations.getCurrentUser();
      return response
    }, []);


  const { result: countries } =
    usePromiseState(async () => {
      const response = await generalOperations.getGeoData<generalOperations.IGetCountriesResponse>('list-countries');
      return response.data ?? [];
    }, []);

  const { result: country } =
    usePromiseState(async () => {
      const response = await generalOperations.getGeoData<generalOperations.IGetSingleCountryResponse>('single-country', user?.residenceCountry ?? 'URY');
      return response.data;
    }, [user?.residenceCountry]);

  const states = country?.states || [];

  const getCities = useCallback((_state: string) => {
    const state = states.find((state) => state['name'] === _state);
    return state?.cities.flatMap((cities) => cities) || [];
  }, [country])

  const sync = async () => {
    const data = {
      user,
      userShipping: userShippings
    };

    const response = await userOperations.updateUser(data);

    console.log('UPDATE USER RESPONSE', response);

    return response.success;
  }

  useEffect(() => {
    if (gettedUserData) {
      setUser(gettedUserData.user);
      setUserShippings(gettedUserData.userShipping);
      console.log('gettedUserData', { gettedUserData })
    }
  }, [gettedUserData])
  if (!user || !userShippings) return null;
  return (
    <Context.Provider value={{
      user,
      userShippings,
      setUser,
      setUserShippings,
      getCities,
      country,
      states,
      sync,
      countries: countries ?? [],
      shippingInformationStateRef,
      shippingInformationCityRef
    }}>
      {children}
    </Context.Provider>
  )
}

function useInitialStepsState() {
  return React.useContext(Context);
}

export { InitialStepsProvider, useInitialStepsState };