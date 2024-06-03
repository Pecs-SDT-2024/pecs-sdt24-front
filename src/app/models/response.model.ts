export interface ResponseModel<T> {
  /**
   * The response status.
   */
  status: ResponseStatus,

  /**
   * The error message, if any.
   */
  message?: string

  /**
   * The payload, if any.
   */
  data?: T
}

export enum ResponseStatus {
  SUCCESS = 'success',
  ERROR = 'error'
}
