import { EntityRepository, Repository } from 'typeorm';
import { Character } from './character.entity';

@EntityRepository(Character)
export class CharactersRepository extends Repository<Character> {
  async getFullNameByIdentifier(identifier: string): Promise<string> {
    const character = await this.findOne({ identifier });
    return character.firstname + ' ' + character.lastname;
  }
}
