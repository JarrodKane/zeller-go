import { color, padding } from '@styles/Constants';
import styled from 'styled-components';

// This layout could just be done in the App.tsx file, but it's good to have a layout component for future use.
//Added in a Nav and footer to show how to use the layout component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  color:  ${color.light};
  background-color: ${color.dark};
  padding: ${padding.large};
`;

const Main = styled.main`
  flex: 1;
  padding: ${padding.medium};
`;

const Footer = styled.footer`
  color:  ${color.light};
  background-color: ${color.dark};
  padding: ${padding.medium};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Navbar>
        <h1>Nav</h1>
      </Navbar>
      <Main>{children}</Main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Container>
  );
};

export default Layout;
