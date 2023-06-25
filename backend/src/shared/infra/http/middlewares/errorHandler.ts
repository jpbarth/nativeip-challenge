import { Request, Response, NextFunction } from 'express';

import { AppError } from '../../../utils/errors/AppError';

function errorHandler(
  err: Error,
  __: Request,
  response: Response,
  _: NextFunction,
) {
  if (err instanceof AppError) {
    return response.status(err.status).json({
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

export { errorHandler };
