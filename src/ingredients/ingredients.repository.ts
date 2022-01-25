import { Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';

export class IngredientsRepository extends Repository<Ingredient> {}
