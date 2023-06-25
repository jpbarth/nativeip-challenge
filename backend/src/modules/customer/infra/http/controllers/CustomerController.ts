import { Request, Response } from 'express';
import { GetCustomerById } from '../../../services/GetCustomerById';
import { UpdateCustomer } from '../../../services/UpdateCustomer';

class CustomerController {
  public async getCustomerById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { customerId } = request.params;

    const service = new GetCustomerById();
    const result = await service.execute(customerId as unknown as number);

    return response.json(result);
  }

  public async updateCustomer(request: Request, response: Response) {
    const { customerId } = request.params;
    const { body } = request;

    const service = new UpdateCustomer();
    const result = await service.execute(customerId as unknown as number, body);

    return response.json(result);
  }
}

export { CustomerController };
