const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Marko",
                    last: "Markovic"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/2.jpg"
                },
                login: {
                    username: "Markoni"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}