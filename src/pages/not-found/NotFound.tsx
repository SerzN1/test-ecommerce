interface IErrorPageProps {
  errorCode?: number;
  errorMessage?: number | string;
}

function ErrorPage({
  errorCode = 404,
  errorMessage = 'Page is not found',
}: IErrorPageProps) {
  return (
    <>
      <h1>{errorCode}</h1>
      <h2>{errorMessage}</h2>
    </>
  );
}

export default ErrorPage;
