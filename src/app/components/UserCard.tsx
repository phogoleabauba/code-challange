import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import { toast } from "react-toastify";

import { User } from "../../models/User";
import { updateUsersAction } from "../../features/UserSlice";
import { useAppDispatch } from "../hooks/hooks";

import UserImage from "./UserImage";

const UserCard = (props: { user: User }) => {
  const dispatch = useAppDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    if (!props.user.isBlocked) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleBlock = () => {
    const updatedUser = { ...props.user, isBlocked: !props.user.isBlocked };
    dispatch(updateUsersAction(updatedUser));
    handleExpand();
    if (updatedUser.isBlocked) {
      toast.info(`${props.user.display_name} has been blocked!`);
    }
  };

  const handleFollow = () => {
    const updatedUser = { ...props.user, isFollowed: !props.user.isFollowed };
    dispatch(updateUsersAction(updatedUser));
    if (updatedUser.isFollowed) {
      toast.info(`You have followed ${props.user.display_name}`);
    } else if (!updatedUser.isFollowed) {
      toast.info(`You have unfollowed ${props.user.display_name}`);
    }
  };

  return (
    <div aria-disabled={props.user.isBlocked}>
      <Card
        data-testid={"card-details"}
        className="shadow-lg mb-4 rounded-0"
        aria-disabled={props.user.isBlocked}
        style={{ width: "auto" }}
        onClick={handleExpand}
      >
        <UserImage user={props.user} />
        <Card.Body aria-disabled={props.user.isBlocked}>
          {props.user.isFollowed && (
            <span
              style={{ fontSize: "10px", fontWeight: "600", color: "green" }}
            >
              Following
            </span>
          )}
          {props.user.isBlocked && (
            <span
              style={{ fontSize: "10px", fontWeight: "600", color: "gray" }}
            >
              Blocked
            </span>
          )}
          <Card.Title aria-disabled={props.user.isBlocked}>
            <div className="d-flex flex-row">
              <p className="mb-0 fw-bolder fs-6">
                {" "}
                {props.user.display_name.length > 14
                  ? props.user.display_name.substring(0, 14) + "..."
                  : props.user.display_name}
              </p>
              &nbsp; &nbsp;
            </div>
          </Card.Title>
          <Card.Text
            aria-disabled={props.user.isBlocked}
            style={{ fontSize: "14px" }}
          >
            Reputation: {props.user.reputation.toLocaleString()}
          </Card.Text>
          <Collapse in={isExpanded}>
            <div>
              <br />
              {!props.user.isBlocked && (
                <div className="d-flex d-grid d-inline-flex">
                  <Button
                    className="flex-fill"
                    size="sm"
                    variant="secondary"
                    onClick={handleBlock}
                  >
                    {props.user.isBlocked ? "Unblock" : "Block"}
                  </Button>
                  &nbsp;
                  <Button
                    className="flex-fill"
                    size="sm"
                    variant="success"
                    onClick={handleFollow}
                  >
                    {props.user.isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </div>
              )}
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
