const deleteSubDomain = url => {
    const urlParts = new URL(url).hostname.split('.')

    return urlParts
        .slice(0)
        .slice(-(urlParts.length === 4 ? 3 : 2))
        .join('.')
}

arrlink = ['https://dumbways.id', 'https://finance.detik.com', 'https://support.hostinger.co.id', 'https://jdih.kominfo.go.id', 'https://mamikos.com'].forEach(url => {
    console.log(deleteSubDomain(url))
})