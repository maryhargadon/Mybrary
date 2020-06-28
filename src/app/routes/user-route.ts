import { Request, Response, NextFunction } from 'express';
import { Users } from '../models/user';  

export class UserRoute {

    public userRoute(app): void {
      app.route('/api/get-users').get((req: Request, res: Response, next: NextFunction) => {
        Users.find((err, users) => {
          if (err) { return next(err); }
          res.json(users);
        });
      });
  
      app.route('/api/get-user/:id').get((req: Request, res: Response, next: NextFunction) => {
        Users.findById(req.params.id, (err, user) => {
          if (err) { return next(err); }
          res.json(user);
        });
      });
  
      app.route('/api/add-user').post((req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        Users.create(req.body, (err, user) => {
          if (err) { return next(err); }
          res.json(user);
        });
      });
  
      app.route('/api/update-user/:id').put((req: Request, res: Response, next: NextFunction) => {
        Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
          if (err) { return next(err); }
          res.json(user);
        });
      });
  
      app.route('/api/delete-user/:id').delete((req: Request, res: Response, next: NextFunction) => {
        Users.findByIdAndRemove(req.params.id, req.body, (err, user) => {
          if (err) { return next(err); }
          res.json(user);
        });
      });
    }
  }