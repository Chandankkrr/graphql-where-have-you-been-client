const apiUrl = 'http://localhost:4000/graphql';
const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: '{ greet }' }),
};

const fetchData = async () => {
    const response = await fetch(apiUrl, request);

    return response
        .json();
}

export default fetchData;