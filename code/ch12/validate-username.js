export default function(username) {
	if (username.match(/^[a-z]/)) {
		return true;
	} else {
		return false;
	}
}
