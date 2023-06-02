interface IPROPS {
  children: React.ReactNode;
}
function Wrapper({ children }: IPROPS) {
  return <div className="w-full px-8 mx-auto sm:px-12 lg:px-16 xl:max-w-7xl">{children}</div>;
}

export default Wrapper;
