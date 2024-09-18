const Menu = () => {
  return (
    <>
      <div className="p-6 h-screen mr-0 mt-auto border border-Almost-Black float-right relative">
        <div className="text-3xl font-bold absolute top-1 right-0 mr-1">X</div>
        <div>
          <ul className="mt-3">
            <li className="flex justify-between items-center">
              <p className="text-s text-Almost-Black">Features</p>
              <span className="ml-2">
                <img src="/images/icon-arrow-down.svg" />
              </span>
            </li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
