import Footer from "../components/footer";
import Header from "../components/header";
import MainComponent from "../components/maincomponent";
import React from "react";
import main from "../jspelado/main";
import ClickToChat from "../components/utils/clicktochat";

function PageMain() {
  React.useEffect(() => {
    main();
  }, []);
  // const [principalPage, setPrincipalPage] = useState(true);

  // const handleClick = () => {
  //   setPrincipalPage(false);
  // };

  // const [detailsPage, setDetailsPage] = useState(false);

  // const mostrarDetalles = () => {
  //   setDetailsPage(true);
  // };

  return (
    <>
      <Header></Header>

      <MainComponent></MainComponent>

      <ClickToChat
        numero="56975633454"
        message="¡Hola! me gustaria consultar por una lancha"
      >
        {" "}
        <img
          alt="Chat on WhatsApp"
          src="/Imgs/whatsapp.svg"
          className="iconowsp"
        ></img>
      </ClickToChat>
      <Footer></Footer>
    </>
  );
}

export default PageMain;
