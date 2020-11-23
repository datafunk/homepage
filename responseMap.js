const responseMap = new Map();

const responses = [
    {
        query: '418',
        response: `"I'm a teapot client error response code indicates that \nthe server refuses to brew coffee because it is, permanently, a teapot."`,
        previousQuentionIndex: -1,
        used: 0
    },
    {
        query: 'about',
        response: `So you'd like to know more?`,
        previousQuentionIndex: -1,
        used: 0
    },
    {
        query: '',
        response: '',
        previousQuentionIndex: -1,
        used: 0
    }
]
