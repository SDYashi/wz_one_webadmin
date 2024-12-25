import { TestBed } from '@angular/core/testing';

import { AuthOneInterceptorInterceptor } from './auth-one-interceptor.interceptor';

describe('AuthOneInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthOneInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthOneInterceptorInterceptor = TestBed.inject(AuthOneInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
