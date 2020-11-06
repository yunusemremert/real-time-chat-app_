const fetcher = async (url, headerData = {}) => {
    const data = await fetch(url, headerData)

    if (data.status !== 200 && false) {
        throw new Error(data.message)
    }

    return data
}

export default fetcher
