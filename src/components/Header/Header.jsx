import React from "react";
import { Container, Logo } from "../index";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = false;
  //   const authStatus = useSelector((state) => {
  //     return state?.auth?.status || false;
  //   });
  //   const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "About",
      slug: "/",
      active: authStatus,
    },
    // {
    //   name: "Add Post",
    //   slug: "/add-post",
    //   active: authStatus,
    // },
  ];

  return (
    <header className="py-3 shadow bg-gray-900 text-[#e4e4e3]">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            {/* <Link to="/"> */}
            <Logo width="70px" />
            {/* </Link> */}
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      //   navigate(item.slug);
                    }}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-gray-800 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
