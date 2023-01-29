import "./Header.css";

const Header = (props) => {
  const item = props;

  return (
    <div className="header">
      <div className="information">
        <div>
          <img src={item.data.avatar} className="profile-picture" key={1} />
        </div>
        <div>
          <div>{item.data.username}</div>
          <div>{item.data.shopName}</div>
        </div>
      </div>
      <p>{item.data.text}</p>
    </div>
  );
};
export default Header;
