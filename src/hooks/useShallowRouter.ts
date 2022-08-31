const useShallowRouter = async (router: any, query: any) => {
  router.push(
    {
      query: { ...router.query, ...query },
    },
    undefined,
    { shallow: true }
  );

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 300);
};

export default useShallowRouter;
