import { Controller, Get, Inject } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Controller('test')
export class TestController {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

    @Get('cache')
    async testCache() {
        let cachedData = await this.cacheManager.get('testKey');

        if (cachedData) {
            // return { message: 'Cache hit', data: cachedData };
        } else {
            const data = { key: 'value' };
            await this.cacheManager.set('testKey', data, 600);
            //return { message: 'Cache miss, setting data', data };
        }
    }
}