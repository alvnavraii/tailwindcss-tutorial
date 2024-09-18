import { useState } from "react";
import Menu from "../Menu";

const Header = () => {
  const [shwMenu, setShwMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4">
        {<img className="mb-auto" src="/images/logo.svg" />}
        {!shwMenu && (
          <img
            onClick={() => {
              setShwMenu(!shwMenu);
            }}
            src="/images/icon-menu.svg"
          />
        )}
        {shwMenu ? <Menu /> : null}
      </header>
    </>
  );
};
export default Header;
