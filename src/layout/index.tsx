import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

interface ILayoutProps {
  children?: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default Layout;
