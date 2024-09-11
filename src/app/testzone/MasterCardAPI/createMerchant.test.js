//* __tests__/pages/api/createMerchant.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import createMerchantHandler from '../../../pages/api/createMerchant';

describe('/api/createMerchant', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should create a merchant', async () => {
    const merchantData = {
      name: 'Test Merchant',
      email: 'test@example.com',
    };

    mock.onPost('/merchant/onboarding').reply(200, { id: '123' });

    const req = { method: 'POST', body: { merchantData } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await createMerchantHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: '123' });
  });
});