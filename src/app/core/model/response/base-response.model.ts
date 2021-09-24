export interface BaseResponse<T> {
  httpCode: number,
  response: T,
  error: string | null
}
