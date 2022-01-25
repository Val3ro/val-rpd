import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharactersRepository } from './characters.repository';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(CharactersRepository, 'MySQL')
    private charactersRepository: CharactersRepository,
  ) {}

  getFullNameById(identifier: string): Promise<string> {
    return this.charactersRepository.getFullNameByIdentifier(identifier);
  }
}
