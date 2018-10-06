import { AdminModule } from './admin.module';

describe('AdminModuleModule', () => {
  let adminModuleModule: AdminModule;

  beforeEach(() => {
    adminModuleModule = new AdminModule();
  });

  it('should create an instance', () => {
    expect(adminModuleModule).toBeTruthy();
  });
});
