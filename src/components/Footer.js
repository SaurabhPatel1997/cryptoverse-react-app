import React from "react";
import { Link } from "react-router-dom";
import { Typography, Space } from "antd";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Copyright © 2021
          <Link to="/">Cryptoverse Inc.</Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
        </Space>
      </div>
    </div>
  );
};

export default Footer;
