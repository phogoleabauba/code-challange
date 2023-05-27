import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import UserList from '../UserList';


describe('UserList component test', () => {

    const users = [{
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
    },
    {
        "badge_counts": {
            "bronze": 838,
            "silver": 916,
            "gold": 183
        },
        "account_id": 3748,
        "is_employee": false,
        "last_modified_date": 1685128500,
        "last_access_date": 1685054904,
        "reputation_change_year": 11206,
        "reputation_change_quarter": 3290,
        "reputation_change_month": 1554,
        "reputation_change_week": 388,
        "reputation_change_day": 8,
        "reputation": 802236,
        "creation_date": 1220976258,
        "user_type": "registered",
        "user_id": 5445,
        "location": "Guatemala",
        "website_url": "http://codingspot.com",
        "link": "https://stackoverflow.com/users/5445/christian-c-salvad%c3%b3",
        "profile_image": "https://www.gravatar.com/avatar/932fb89b9d4049cec5cba357bf0ae388?s=256&d=identicon&r=PG",
        "display_name": "Christian C. Salvad&#243;"
    }];

    it('render userList with initial user', () => {
        const { getByText } = render(
            <Provider store={store}>
                <UserList users={users} />
            </Provider>
        );

        expect(getByText(/paxdiablo/i)).toBeInTheDocument();
    });
});