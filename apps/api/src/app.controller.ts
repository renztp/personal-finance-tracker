import { Controller, Get } from '@nestjs/common';
import { prisma } from '@repo/database';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getHello(): Promise<string> {
    const accounts = await prisma.accounts.findMany();
    console.log(accounts);
    return this.appService.getHello();
  }
}
