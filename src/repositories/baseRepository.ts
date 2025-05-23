import {
  Model,
  ModelStatic,
  WhereOptions,
  CreationAttributes,
} from "sequelize";

export class BaseRepository<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async findAll(): Promise<T[]> {
    return this.model.findAll({ order: [["createdAt", "DESC"]] });
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async create(data: CreationAttributes<T>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<CreationAttributes<T>>): Promise<T | null> {
    await this.model.update(data, { where: { id } as WhereOptions });
    return this.model.findByPk(id);
  }

  async delete(id: string): Promise<void> {
    await this.model.destroy({ where: { id } as WhereOptions });
  }
}
