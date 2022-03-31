import { Request, Response, NextFunction } from 'express';

import { validationResult } from 'express-validator';

export const validate = (req: Request, res: Response, next: NextFunction) => {

	const error = validationResult(req);

	if(!error.isEmpty()) {
		return res.status(500).json({
			ok: false,
			errors: error.mapped()
		});
	}
	next();
};