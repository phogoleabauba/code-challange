import UserCard from '../UserCard';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('UserCard component test', () => {

  const user = {
    "badge_counts": {
      "bronze": 1943,
      "silver": 1568,
      "gold": 233
    },
    "account_id": 8291,
    "is_employee": false,
    "last_modified_date": 1685128500,
    "last_access_date": 1685090586,
    "reputation_change_year": 12664,
    "reputation_change_quarter": 4037,
    "reputation_change_month": 1862,
    "reputation_change_week": 511,
    "reputation_change_day": 10,
    "reputation": 847336,
    "creation_date": 1221622605,
    "user_type": "registered",
    "user_id": 14860,
    "accept_rate": 100,
    "website_url": "",
    "link": "https://stackoverflow.com/users/14860/paxdiablo",
    "profile_image": "https://i.stack.imgur.com/vXG1F.png?s=256&g=1",
    "display_name": "paxdiablo"
  };

  it('usercard with initial user', () => {
    const { getByText } = render(
      <Provider store={store}>
        <UserCard user={user} />
      </Provider>
    );

    expect(getByText(/paxdiablo/i)).toBeInTheDocument();
  });

  it('usercard with initial user which is disabled is still visible', () => {
    const { getByText } = render(
      <Provider store={store}>
        <UserCard user={user} />
      </Provider>
    );
    const card = screen.getByText("paxdiablo");
    expect(card).toBeVisible();
  });
});