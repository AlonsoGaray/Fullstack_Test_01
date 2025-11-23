import { Request, Response, NextFunction } from 'express'
import { ZodType, ZodError } from 'zod'

export const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        })
        return
      }
      next(error)
    }
  }

export const validateQuery =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.query)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: 'Invalid query parameters',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        })
        return
      }
      next(error)
    }
  }
