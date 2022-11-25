import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './videocdn/Movies/Controllers/movies.controller';
import { MoviesService } from './videocdn/Movies/Services/movies.service';

describe('AppController', () => {
  let appController: MoviesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    appController = app.get<MoviesController>(MoviesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
