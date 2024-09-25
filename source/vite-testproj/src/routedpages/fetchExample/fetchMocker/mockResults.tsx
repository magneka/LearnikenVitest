const mockResults = (req: Request) => {

    if (req.url.endsWith('/jokes/random')) {
        return {
            ok: true,
            statusText: "OK",
            body: JSON.stringify({ value: "ChuckJoke" })
        }
    } else if (req.url.endsWith('/path2')) {
        return {
            body: 'another response body',
            headers: {
                'X-Some-Response-Header': 'Some header value',
            },
        };
    } else {
        return {
            status: 404,
            body: 'Not Found',
        };
    }
};


export default mockResults;