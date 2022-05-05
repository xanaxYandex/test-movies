export const getIdFromUrl = (url: string) => {
    const parsedUrl = url.split('/');
    return parsedUrl[parsedUrl.length - 2];
}
