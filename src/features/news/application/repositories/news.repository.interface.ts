import { News } from '../../data/entities/news.entity';
import { PaginatedResult } from '../../../common/dtos/paginated.resalt.dto';
import { NewsFilter } from '../../presentation/filters/news.filter';

export abstract class INewsRepository {
  abstract save(entity: News): Promise<News>;

  abstract getOneById(id: number): Promise<News | null>;

  abstract getAll(filters: NewsFilter): Promise<PaginatedResult>;

  abstract delete(entity: News): Promise<void>;
}