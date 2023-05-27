import React, { useState } from "react";
import { Row, Col, Form, Pagination } from "react-bootstrap";

import { User } from "../../models/User";
import UserCard from "./UserCard";

const UserList = (props: { users: User[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("reputation");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when performing a search
  };

  const handleSort = (event: any) => {
    setSortOption(event.target.value);
    setCurrentPage(1); // Reset to first page when performing a search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredUsers = props.users.filter(
    (user: User) =>
      user?.display_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user?.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOption === "reputation") {
      return b.reputation - a.reputation;
    } else if (sortOption === "name") {
      return a.display_name.localeCompare(b.display_name);
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / pageSize);

  const paginatedUsers = sortedUsers?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <Row xs={2} md={2} lg={3} xl={4} className="g-4 mb-4">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Search:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Start typing..."
              value={searchQuery}
              onChange={handleSearch}
              className="border-0 border-bottom border-2 rounded-0"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Sort by:</Form.Label>
            <Form.Control
              as="select"
              value={sortOption}
              onChange={(e) => handleSort(e)}
              className="border-0 border-bottom border-2 rounded-0"
            >
              <option value="reputation">Reputation</option>
              <option value="name">Name</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      {paginatedUsers.length === 0 && (
        <Row xs={1} md={1} lg={1} xl={1} className="ml-4">
          <Col className="d-flex justify-content-center py-4 my-4 border fw-light align-items-center">
            <p className="mb-0">
              Could not find result for the search criteria
            </p>
          </Col>
        </Row>
      )}

      <Row xs={1} md={2} lg={3} xl={6} className="ml-4">
        {paginatedUsers?.map((user, index) => (
          <Col key={index}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>

      <Pagination className="float-end mt-4 border-0 rounded-0">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Pagination.Item
              className="border-0 "
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          )
        )}
      </Pagination>
    </>
  );
};

export default UserList;
