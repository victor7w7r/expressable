import { Router } from 'express';
import { check, ValidationChain } from 'express-validator';

import { deleteAction, getAction, postAction, putAction } from '../api/actions';
import { validate } from '../middlewares/validate';

export const router: Router = Router();

const message: ValidationChain = check('sample', 'Your body needs \'sample\' property in JSON format').not().isEmpty();

router.get( '/', validate, getAction);
router.post('/', [message, validate], postAction);
router.put('/:id', [message, validate], putAction);
router.delete('/:id', [message, validate], deleteAction);