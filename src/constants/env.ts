const { NODE_ENV, NEXT_PUBLIC_SITE_URL } = process.env
export const isDev = NODE_ENV !== 'production'

export const SITE_ORIGIN = NEXT_PUBLIC_SITE_URL
export const SITE_TITLE = 'タイトル'
export const SITE_DESCRIPTION = 'デスクリプション'
