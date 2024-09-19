export function toCitationUrl(fileName: string, baseUrl: string): string {
    const url = new URL(baseUrl);
    url.pathname += `/${fileName}`;
    url.hash = 'view-fitV';
    return url.toString();
}
