import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Img, setImg] = React.useState("https://img5.goodfon.ru/original/1918x1280/0/35/uzbekistan-flag-uzbekistan-large-flag-flag-of-uzbekistan-uzb.jpg")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function Uzb() {
    setImg("https://img5.goodfon.ru/original/1918x1280/0/35/uzbekistan-flag-uzbekistan-large-flag-flag-of-uzbekistan-uzb.jpg")
  }
  function Rus() {
    setImg("https://ggym.ru/wp-content/uploads/2021/10/flag-russia-XL.jpg")
  }
  function Eng() {
    setImg("https://img5.goodfon.ru/original/1680x1050/d/11/american-flag-usa-united-states-flag-american.jpg")
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={Img}
          alt="uzbek"
          style={{ borderRadius: "50%", width: "50px", height: "50px" }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <div onClick={Uzb}>
            <img
              src="https://img5.goodfon.ru/original/1918x1280/0/35/uzbekistan-flag-uzbekistan-large-flag-flag-of-uzbekistan-uzb.jpg"
              alt="uzb flag"
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
            <b>UZB</b>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div onClick={Rus}>
            <img
              src="https://ggym.ru/wp-content/uploads/2021/10/flag-russia-XL.jpg"
              alt="russia "
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
            <b>Russia</b>
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
         <div onClick={Eng}>
         <img
            src="https://img5.goodfon.ru/original/1680x1050/d/11/american-flag-usa-united-states-flag-american.jpg"
            alt="USA"
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
          />
          <b>English</b>
         </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
