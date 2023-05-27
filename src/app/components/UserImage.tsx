import React from "react";
import { Card } from "react-bootstrap";

import { User } from "../../models/User";

const UserImage = (props: { user: User }) => {
  return (
    <>
      <Card.Img
        className="pe-auto rounded-0"
        aria-disabled={props.user.isBlocked}
        variant="top"
        src={props.user.profile_image}
      />
    </>
  );
};

export default UserImage;
