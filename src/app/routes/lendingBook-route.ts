import { Request, Response, NextFunction } from 'express';
import { LendingBooks } from '../models/lendingBook'; 

export class LendingBookRoute {

    public lendingBookRoute(app): void {

      //get single book
      app.route('/api/get-book/:id').get((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findById(req.params.id, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
      
      //update book
      app.route('/api/update-book/:id').put((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findByIdAndUpdate(req.params.id, req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
      
      //delete book
      app.route('/api/delete-book/:id').delete((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.findByIdAndRemove(req.params.id, req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });

      //get all books
      app.route('/api/get-books').get((req: Request, res: Response, next: NextFunction) => {
        LendingBooks.find((err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });

      //add (create) book:
      app.route('/api/add-book').post((req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        LendingBooks.create(req.body, (err, lendingBooks) => {
          if (err) { return next(err); }
          res.json(lendingBooks);
        });
      });
    }
  }