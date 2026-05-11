import { FastifyRequest, FastifyReply } from "fastify";

import { CreateCustomerService } from "../services/CreateCustomesServices.js";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // O || {} previne que dê erro se request.body for undefined
    const { name, email } =
      (request.body as { name: string; email: string }) || {};

    const customerService = new CreateCustomerService();

    const customer = await customerService.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateCustomerController };
