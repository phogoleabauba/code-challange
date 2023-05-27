import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getUsersAction, usersSelector } from "../../features/UserSlice";
import UserList from "../components/UserList";
import Loader from "../components/loader/Loader";
import ErrorPage from "../components/ErrorPage";

export default function Users() {
  const dispatch = useAppDispatch();
  const { users, loading, errors } = useAppSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (errors) {
    return <ErrorPage errorCode={500} />;
  }

  return (
    <>
      <Container className="mt-4 pt-4">
        <UserList users={users} />
      </Container>
    </>
  );
}
