export async function getData() {
    const beastScanEndPoint = "https://my.beastscan.com/test-kit"

    try {
        const response = await fetch(beastScanEndPoint)
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json()
    } catch(error) {
        console.error(error.message);
    }
}