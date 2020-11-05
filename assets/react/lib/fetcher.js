const fetcher = async (url, headerData = {}) => {
    const res = await fetch(url, headerData)
    const data = await res.json()

    if (res.status !== 200 && false) {
        throw new Error(data.message)
    }

    return data
}

export default fetcher
