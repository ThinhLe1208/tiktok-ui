import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image
        className={cx("avatar")}
        src="https://img.lovepik.com/free-png/20211129/lovepik-girl-cartoon-hand-drawn-cute-illustration-avatar-png-image_401193454_wh1200.png"
        alt="avatar"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
        </h4>
        <p className={cx("username")}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;
