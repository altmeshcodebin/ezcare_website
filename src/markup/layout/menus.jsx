import React, {useState, useEffect} from "react";

const MenusItems = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleSubmenu = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth >= 768);
    };

    // Check the screen size on initial render and whenever the window is resized
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: "home",
      name: "Home",
      linkName: "#",
    },
    {
      id: "About us",
      name: "About us",
      linkName: "#",
    },
    {
      id: "services",
      name: "Services",
      linkName: "#",
    },
  ];

  return (
    <ul className='nav navbar-nav'>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={`${activeItem === item.id ? "open" : ""}`}
          onClick={() => toggleSubmenu(item.id)}
        >
          {item.subItems ? (
            <a href='#'>
              {item.name}
              <i className={`fas fa-plus`}></i>
            </a>
          ) : (
            <a href={`/${item.linkName}`}>{item.name}</a>
          )}
          {(isMobileView || activeItem === item.id) && item.subItems && (
            <ul className='sub-menu'>
              {item.subItems.map((subItem, index) => (
                <li key={subItem.id}>
                  <a href={`/${subItem.linkName}`}>
                    <span>{subItem.displayName}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenusItems;
