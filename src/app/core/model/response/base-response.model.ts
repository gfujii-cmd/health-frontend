export interface BaseResponse<T> {
  httpCode: number,
  data: T,
  error: string | null
}
