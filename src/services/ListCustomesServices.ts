import { prismaClient } from "../prisma/index.js";

class ListCustomerService {
  async execute() {
    const customer = await prismaClient.customer.findMany();
    return customer;
  }
}

export { ListCustomerService };
