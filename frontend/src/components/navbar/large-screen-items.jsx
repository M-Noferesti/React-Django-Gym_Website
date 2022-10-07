import { NavBarItems } from "./navbar-styles";

function LargeScreenItems({ items }) {
  return (
    <NavBarItems>
      {items.map((item, index) => (
        <li key={index}>
          {window.location.href == "http://localhost:3000/" &&
          item.class == "home" ? (
            <a
              href={!item.hasOwnProperty("subItems") ? item.url : null}
              className="active"
            >
              {item.title}
            </a>
          ) : (
            <a
              href={!item.hasOwnProperty("subItems") ? item.url : null}
              className={
                window.location.href.includes(item.class) ? "active" : null
              }
            >
              {item.title}
            </a>
          )}
          {item.hasOwnProperty("subItems") ? (
            <ul className="dropdown">
              <LargeScreenItems items={item.subItems} />
            </ul>
          ) : null}
        </li>
      ))}
    </NavBarItems>
  );
}

export default LargeScreenItems;
