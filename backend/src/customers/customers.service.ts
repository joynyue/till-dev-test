import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import * as customersData from '../mockData/mockCustomers.json';
import { throwError } from 'rxjs';

@Injectable()
export class CustomersService {
  mockDb = customersData;

  create(createCustomerDto: CreateCustomerDto) {
    const isIdDuplicated = this.mockDb.find((customer) => {
      return customer.id === createCustomerDto.id.toString();
    });

    if (isIdDuplicated) {
      throw new Error();
    }

    this.mockDb = [...customersData, createCustomerDto];

    return this.mockDb;
  }

  findAll() {
    return this.mockDb;
  }

  findOne(id: number) {
    const customer = this.mockDb.find((customer) => {
      return customer.id === id.toString();
    });
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customers = this.mockDb.map((customer) => {
      if (customer.id === updateCustomerDto.id.toString()) {
        return { ...customer, ...updateCustomerDto };
      }
      return customer;
    });
    return customers;
  }

  remove(id: number) {
    return this.mockDb.filter((customer) => parseInt(customer.id, 10) !== id);
  }
}
