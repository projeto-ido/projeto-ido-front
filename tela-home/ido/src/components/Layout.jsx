import MenuLateral from "./MenuLateral";
import Container from "./Container";

function Layout({ children }) {

  return (
    <div className="container-main">
      <div><MenuLateral /></div>
      <Container>
        {children}
      </Container>
    </div>
  );

}

export default Layout;
