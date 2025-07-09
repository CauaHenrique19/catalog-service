import { Inject } from '@nestjs/common';
import { EntityTarget, FindOptionsWhere, Repository } from 'typeorm';

import { CreateCategoryRepository, FindCategoriesRepository } from '@catalog-service/data/protocols/db';
import { Category } from '@catalog-service/infra/orm/entities';
import { CATEGORY_REPOSITORY } from '@catalog-service/infra/orm/typeorm/typeorm.repositories';
import { AppDataSource } from '@catalog-service/infra/orm/typeorm/data-source';

export class CategoryRepository implements CreateCategoryRepository, FindCategoriesRepository {
  private readonly categoryRepository: Repository<Category>;

  constructor(@Inject(CATEGORY_REPOSITORY) private readonly Category: EntityTarget<Category>) {
    this.categoryRepository = AppDataSource.getRepository(this.Category);
  }

  find(parameters?: FindCategoriesRepository.Parameters): Promise<FindCategoriesRepository.Result> {
    const where: FindOptionsWhere<Category> = {};

    if (parameters?.name) {
      where.name = parameters.name;
    }

    return this.categoryRepository.find({
      where,
    });
  }

  async create(parameters: CreateCategoryRepository.Parameters): Promise<CreateCategoryRepository.Result> {
    const category = new Category();
    Object.assign(category, parameters);

    await this.categoryRepository.save(category);
    return category;
  }
}
