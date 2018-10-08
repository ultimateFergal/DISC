import { DiscFeModule } from './disc-fe.module';

describe('DiscFeModule', () => {
  let discFeModule: DiscFeModule;

  beforeEach(() => {
    discFeModule = new DiscFeModule();
  });

  it('should create an instance', () => {
    expect(discFeModule).toBeTruthy();
  });
});
