import Sidebar from "react-bootstrap-sidebar-menu";

export default function SideBar() {
  return (
    <Sidebar>
      <Sidebar.Collapse>
        <Sidebar.Header>
          <Sidebar.Brand>
            {" "}
            <a href="/index.html">
              <img src="/Imgs/logo-light.png" alt="Logo" className="logo" />{" "}
            </a>
          </Sidebar.Brand>
          <Sidebar.Toggle />
        </Sidebar.Header>
        <Sidebar.Body>
          <Sidebar.Nav>
            <Sidebar.Nav.Link>
              <Sidebar.Nav.Icon>{/* menu item icon */}</Sidebar.Nav.Icon>
              <Sidebar.Nav.Title>{/* menu item title */}</Sidebar.Nav.Title>
            </Sidebar.Nav.Link>
            <Sidebar.Sub>
              <Sidebar.Sub.Toggle>
                <Sidebar.Nav.Icon />
                <Sidebar.Nav.Title>
                  {/* sub menu item title */}
                </Sidebar.Nav.Title>
              </Sidebar.Sub.Toggle>
              <Sidebar.Sub.Collapse>
                <Sidebar.Nav>
                  <Sidebar.Nav.Link>
                    <Sidebar.Nav.Icon>
                      {/* sum menu item icon */}
                    </Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>
                      {/* sub menu item title */}
                    </Sidebar.Nav.Title>
                  </Sidebar.Nav.Link>
                </Sidebar.Nav>
              </Sidebar.Sub.Collapse>
            </Sidebar.Sub>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Collapse>
    </Sidebar>
  );
}
