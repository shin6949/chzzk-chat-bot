import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ChzzkApiService {
  async getLiveStatus(toGetChannelId: string) {
    const response: AxiosResponse = await axios.get(
      `https://api.chzzk.naver.com/polling/v2/channels/${toGetChannelId}/live-status`,
    );
    return response.data;
  }
}
