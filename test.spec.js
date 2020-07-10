/**
 * @jest-environment node
 */

const sandbox = require("@architect/sandbox");
const { get } = require("axios")


describe('env var availability', () => {
    let stopSandbox;
    beforeAll(async() => {
        stopSandbox = await sandbox.start({ port: 3333, quiet: true });
    });

    afterAll(() => stopSandbox());

    it("should print 'FOO IS BAR' in the terminal (ignore test result, look up^^^)", () => {
        return get("http://localhost:3333/");
    })
});