export interface DeepLResponse {
    alternatives?: string[]
    code?: number
    message?: string
    data?: string
    id?: number
}

export interface GoogleTranslateResponse {
    src: string
    sentences: {
        trans: string
        orig: string,
        backend: number,
    }[],
    confidence: number
}
