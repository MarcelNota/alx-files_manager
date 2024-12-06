import redis from 'redis';
import { promisify } from 'util';

/**
 * onde serao feitas as cenas com redis
 */
class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);

    this.client.on('error', (error) => {
      console.log(`Redis client not connected to the server: ${error.message}`);
    });

    this.client.on('connect', () => {
      // console.log('Redis client connected to the server');
    });
  }

  /**
   * verifica entao a ligacao
   * @return {boolean} sim ou nao
   */
  isAlive() {
    return this.client.connected;
  }

  /**
   * ghkjghjfgghjghj
   * @key ghjfgvjfgjfgj
   */
  async get(key) {
    const value = await this.getAsync(key);
    return value;
  }

  /**
   * rfghfghrtfgjhftgjhfgj
   * @key fdjsahfklsdhgfosdfjg
   * @value tasdsjdfhsdlfsdjfg
   * @duration {vi a verificascoa
   * @return naghygjgj
   */
  async set(key, value, duration) {
    this.client.setex(key, duration, value);
  }

  /**
   * hgjjghgjgjghjjgjgh
   * @key hgjgjkfgjfg
   * @return rtutufj
   */
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();

export default redisClient;
