import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import config from "~/config";
import Button from "~/components/Button";
import images from "~/assets/images";
import Menu from "~/components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "~/components/Search";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vn",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
    to: "",
  },
];

function Header() {
  console.log("Header render");

  const currentUser = true;

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle change lanuage
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="tiktok-logo" />
        </Link>

        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <div className={cx("current-user")} placement="bottom">
              <>
                <Tippy content="Uploaded video" delay={[0, 50]} placement="bottom">
                  <button className={cx("action-btn")}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy content="Message" delay={[0, 50]} placement="bottom">
                  <button className={cx("action-btn")}>
                    <MessageIcon />
                  </button>
                </Tippy>
                <Tippy content="Inbox" delay={[0, 50]} placement="bottom">
                  <button className={cx("action-btn")}>
                    <InboxIcon />
                    <span className={cx("badge")}>12</span>
                  </button>
                </Tippy>
              </>
            </div>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://img.lovepik.com/free-png/20211129/lovepik-girl-cartoon-hand-drawn-cute-illustration-avatar-png-image_401193454_wh1200.png"
                alt="user-avtar"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
