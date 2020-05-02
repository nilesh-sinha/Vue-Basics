export const cloudflareUrl = 'https://res.cloudinary.com/nd10/image/upload/v1588420841/hlw-wrld/';

export function processImage(response) {
    return Buffer.from(response.data, 'binary').toString('base64');
}