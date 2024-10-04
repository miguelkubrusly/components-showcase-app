function Link({ children, onClick }: any) {
  return (
    <div key={Math.floor(Math.random() * 10 ** 5)}>
      <a onClick={onClick} href={`./${children.toLowerCase()}`}>
        {children}
      </a>
    </div>
  );
}

export default Link;
