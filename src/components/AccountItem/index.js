import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e98703e3679ef9d9db968b2abadbba39~c5_300x300.webp?x-expires=1677362400&x-signature=kTp1lq%2Bb3Xu%2B5tmJti2TSwD7HKM%3D"
        alt="A"
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
