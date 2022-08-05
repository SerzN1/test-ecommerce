import { ReactNode } from 'react';

interface IMainProps {
  children?: ReactNode;
}

function Main({ children }: IMainProps) {
  return <div className="main container-fluid pt-4 pb-4">{children}</div>;
}

export default Main;
