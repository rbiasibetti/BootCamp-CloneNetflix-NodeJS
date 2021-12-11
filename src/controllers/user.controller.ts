import { Request, Response } from 'express';
import { User } from '../models/user.model';
interface UserResult {
  _id: string;
  name: string;
  email?: string;
  password?: string;
}

function view(req: Request, res: Response) {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(404).json({
      message: 'usuário não encontrado'
    });
  }
  User.findById(id, (error: any, result: UserResult) => {
    if (error) {
      res.status(500).json(error);
    }

    return res.status(200).json({
      user: {
        id: result._id,
        name: result.name
      }
    })
  });
}

function destroy(req: Request, res: Response) {
  const { id } = req.params;
  User.findByIdAndRemove(id, function (error: Error | string | undefined, result: UserResult) {
    if (error || !result) {
      console.log(error);
      return res.status(500).json({
        message: 'Não foi possível excluir o usuário'
      });
    }
    return res.status(200).json({
      message: 'Usuário excluído com sucesso'
    })
  });
}
export { view, destroy };

