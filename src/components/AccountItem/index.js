import PropTypes from "prop-types";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@/${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt={data.full_name} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />}
        </h4>
        <p className={cx("username")}>{data.nickname}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
