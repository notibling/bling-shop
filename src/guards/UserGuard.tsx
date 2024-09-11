'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { usePromise } from "@/hooks/usePromise"
import * as userOperations from '@/contexts/GlobalState/user/operations';
import { IUser } from "@/entities/User";
import { ScreenLoader } from "@/components/molecules/ScreenLoader";
import { useGlobalState } from "@/contexts/GlobalState";
import classNames from "classnames";

const enabled = false
function AuthenticatedUser(
  Component: React.FC<any> | undefined,
  props: any,
  user: IUser,
  router: ReturnType<typeof useRouter>
) {
  const alreadyInInitialSteps = window.location.href.match(/dashboard\/initial-steps/g);

  if (!alreadyInInitialSteps && !userOperations.getInitialStepsFulfilled(user))
    return router.push('/dashboard/initial-steps/');

  if (Component)
    return <Component {...props} />;
}


const UserGuardNonBlocking: React.FC<{}> = (props: any) => {
  const { auth } = useGlobalState();
  const router = useRouter();
  const { result, loading, perform, } = usePromise(() =>
    userOperations.getCurrentUser()
  );

  useEffect(() => {
    if (!loading) perform();
  }, [])


  useEffect(() => {
    if (!loading && result?.success && !auth.user) {
      auth.setUser(result.user);
    }
  }, [result]);
  if (loading) return <ScreenLoader className={classNames('bg-opacity-100')} />

  if (!enabled) return null;

  if (!loading && result?.success) {
    return AuthenticatedUser(undefined, props, result.user, router) ?? <></>;
  }
  if (result?.success === false) router.replace('/auth');
  return null;
}

const UserGuard = (Component: React.FC<any>) => (props: any) => {
  const { auth } = useGlobalState();
  const router = useRouter();
  let { result, loading, perform, } = usePromise(() =>
    userOperations.getCurrentUser()
  );

  loading = true;

  useEffect(() => {
    if (!loading) perform();
  }, [])


  useEffect(() => {
    if (!loading && result?.success && !auth.user) {
      auth.setUser(result.user);
    }
  }, [result]);
  if (loading) return <ScreenLoader className={classNames('!bg-opacity-90')} />

  if (!enabled) return <Component {...props} />
  if (!loading && result?.success) {
    return AuthenticatedUser(Component, props, result.user, router) || <></>;
  }
  if (result?.success === false) router.replace('/auth');

  return <></>;
}

export { UserGuard, UserGuardNonBlocking };