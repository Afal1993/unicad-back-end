import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Locale } from '../entities/locale.entity'

@Injectable()
export class LocaleService {

  constructor(@InjectRepository(Locale)
    private readonly repository: Repository<Locale>
  ) {}

  async findOne(id:number) {
    return await this.repository.findOneBy({id});
  }

  async findAll() {
    return await this.repository.find();
  }

  async create(locale: Locale) {
    const data = { ...locale, deliveryDate: new Date()}
    return await this.repository.save(data)
  }

  async update(id: number, locale: Locale) {
    return await this.repository.update(id, locale)
  }

  async delete(id:number) {
    return await this.repository.delete({id});
  }

}
