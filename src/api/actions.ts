
import { Request, Response } from 'express';

export const getAction = (res: Response) => {
	res.status(200).json({
        ok: true,
        msg: 'Hi, please in PUT, POST, DELETE, use \'sample\' property in your body'
    });
};

export const postAction = (req: Request, res: Response) => {

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

export const putAction = (req: Request, res: Response) => {

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

export const deleteAction = (req: Request, res: Response) => {

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