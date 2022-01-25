import { EntityRepository, Repository } from 'typeorm';
import { Craft } from './craft.entity';

@EntityRepository(Craft)
export class CraftingsRepository extends Repository<Craft> {}
