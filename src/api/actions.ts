
import { NextFunction, Request, Response } from 'express';

export const getAction = (err: any, req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({
        ok: true,
        msg: 'Hi, please in PUT, POST, DELETE, use \'sample\' property in your body'
    });
};

export const postAction = (err: any, req: Request, res: Response, next: NextFunction) => {

	const { sample }: { sample: string } = req.body;

    try {
        res.status(201).json({
            ok: true,
            msg: `Yes, you write ${sample}`
        });
    } catch (error: any) {
        res.status(500).json({
            ok: false,
            msg: `Error ${error.message}`
        });
    }
};

export const putAction = (err: any, req: Request, res: Response, next: NextFunction) => {

	const { sample }: { sample: string } = req.body;
    const id: string = req.params.id || "";

    try {
        res.status(202).json({
            ok: true,
            msg: `Yes, you write ${sample} with parameter ${id}`
        });
    } catch (error: any) {
        res.status(500).json({
            ok: false,
            msg: `Error ${error.message}`
        });
    }
};

export const deleteAction = (err: any, req: Request, res: Response, next: NextFunction) => {

	const { sample }: { sample: string } = req.body;
    const id: string = req.params.id || "";

    try {
        res.status(202).json({
            ok: true,
            msg: `Yes, you write ${sample} with parameter ${id}`
        });
    } catch (error: any) {
        res.status(500).json({
            ok: false,
            msg: `Error ${error.message}`
        });
    }
};