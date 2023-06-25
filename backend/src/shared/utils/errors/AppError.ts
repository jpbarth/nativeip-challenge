class AppError extends Error {
  public readonly message: string;

  public readonly status: number;

  constructor(message: string, status = 500) {
    super();
    this.message = message;
    this.status = status;
  }
}

export { AppError };
