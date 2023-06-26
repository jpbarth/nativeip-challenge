import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AppError } from '../../../utils/errors/AppError';

function ensureAuthentication(
  request: Request,
  _: Response,
  next: NextFunction,
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError('User not authenticated', 401);
  }

  const [, token] = authorization.split(' ');

  const decoded = jwt.decode(token);

  if (decoded === null) {
    throw new AppError('Invalid JWT', 401);
  }

  return next();
}

export { ensureAuthentication };
