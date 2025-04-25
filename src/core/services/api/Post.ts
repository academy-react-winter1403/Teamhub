import http from "../interceptor"

export const postFunc = async (endPoint: string, postObjects: unknown): Promise<unknown> => {
    try {
        console.log(postObjects)
        const response = await http.post(endPoint, postObjects)
        console.log(response)
        return response
    } catch (error) {
        console.error("Post request failed:", error)
        throw error
    }
}
