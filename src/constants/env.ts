const { NODE_ENV, NEXT_SITE_ORIGIN } = process.env
export const isDev = NODE_ENV !== 'production'

export const SITE_ORIGIN = NEXT_SITE_ORIGIN
export const SITE_TITLE = 'タイトル'
export const SITE_DESCRIPTION = 'デスクリプション'
