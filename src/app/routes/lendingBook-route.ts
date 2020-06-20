import { Request, Response, NextFunction } from 'express';
import { LendingBooks } from '../models/lendingBook'; 

export class LendingBookRoute {

    public lendingBookRoute(app): void {
      app.route('/api/').get((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.find((err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
  
      app.route('/api/:id').get((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findById(req.params.id, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
  
      app.route('/api/').post((req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        LendingBooks.create(req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
  
      app.route('/api/:id').put((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findByIdAndUpdate(req.params.id, req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
  
      app.route('/api/:id').delete((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findByIdAndRemove(req.params.id, req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
    }
  }