async function getPromiseState<T>(promise: () => Promise<T>): Promise<{ result: T, loading: boolean }> {

  const data = await promise();

  return { result: data, loading: false };
}

export { getPromiseState }