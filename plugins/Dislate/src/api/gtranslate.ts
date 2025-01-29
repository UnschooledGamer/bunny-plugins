import { GoogleTranslateResponse } from "../type"
/**
 * Updated to Google Translate API 
 * referenced from https://github.com/Vendicated/Vencord/blob/ea1e96185b1f1a613a2100c1d7899603790dc862/src/plugins/translate/utils.ts#L79
 * params information: https://stackoverflow.com/a/29537590
 */
const API_URL = "https://translate.googleapis.com/translate_a/single"

const translate = async (text: string, source_lang: string = "auto", target_lang: string, original: boolean = false) => {
    const API_URL_WITH_PARAMS = API_URL + `?` + new URLSearchParams({
        client: "gtx",
        sl: source_lang,
        tl: target_lang,
        dt: "t",
        dj: "1",
        q: text
    })
    try {
        if (original) return { source_lang, text }
        const res = await fetch(API_URL_WITH_PARAMS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await res.json() as GoogleTranslateResponse
        if (res.status !== 200) throw Error(`Failed to translate text from google translate: ${res.statusText}`)
        return { source_lang, text: data.sentences[0].trans }
    } catch (e) {
        throw Error(`Failed to fetch translation from google translate: ${e}`)
    }
}

export default { translate }


