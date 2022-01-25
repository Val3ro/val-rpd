import { EntityRepository, Repository } from 'typeorm';
import { Gathering } from './gathering.entity';

@EntityRepository(Gathering)
export class GatheringsRepository extends Repository<Gathering> {}
