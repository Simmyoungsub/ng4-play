self.addEventListener('message', async event => {
    const url = event.data;
    console.log(event);
    const response = await fetch(url);
    const blob = await response.blob();

    console.log(response);

    console.log(blob);

    self.postMessage({
        url: url,
        blob: blob
    });
})