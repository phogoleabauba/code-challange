import axios from 'axios';

const getBaseUrl = () => {
	if (window.location.hostname === 'localhost') {
		return `https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`;
	}

	return `https://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow`;
};

const httpOptions = axios.create({
	baseURL: getBaseUrl(),
});

httpOptions.defaults.headers.common['Accept'] = 'application/json';
httpOptions.defaults.headers.post['Content-Type'] = 'application/json';
// httpOptions.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default httpOptions;