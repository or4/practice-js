async function myFetchUrl(url: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(`data: ${url}`);
        }, 0);
    });
}

function promiseRace(urls: string[]) {
    return new Promise(resolve => {
        for (let index = 0; index < urls.length; index++) {
            myFetchUrl(urls[index]).then(data => {
                resolve(data);
            });
        }
    });
}

describe('Promise all', () => {
    it('should work', async () => {
        const result = await promiseRace(['url1', 'url2']);
        expect(result).toEqual('data: url1');
    });
});
