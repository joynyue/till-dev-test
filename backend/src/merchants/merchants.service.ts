import { Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import * as merchantsData from '../mockData/mockMerchants.json';

@Injectable()
export class MerchantsService {
  create(createMerchantDto: CreateMerchantDto) {
    return 'This action adds a new merchant';
  }

  findAll() {
    return merchantsData;
  }

  findOne(id: number) {
    const merchant = merchantsData.find((merchant) => {
      console.log('merchant: ', merchant);
      console.log('id.toString(): ', id.toString());
      return parseInt(merchant.id, 10) === id;
    });
    return merchant;
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return `This action updates a #${id} merchant`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
