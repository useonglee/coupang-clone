const useShallowRouter = (router: any, query: any) => {
  router.push(
    {
      query: { ...router.query, ...query },
    },
    undefined,
    { shallow: true }
  );
};

export default useShallowRouter;
