import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  testCat(): string {
    return 'test';
  }
}
