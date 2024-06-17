import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ChzzkApiLiveStatusResponse } from './dto/chzzk-api-live-status-response.dto';

@Injectable()
export class ChzzkApiService {
  async getLiveStatus(toGetChannelId: string) {
    const response: AxiosResponse = await axios.get<ChzzkApiLiveStatusResponse>(
      `https://api.chzzk.naver.com/polling/v2/channels/${toGetChannelId}/live-status`,
    );

    if (response.status !== 200) {
      throw new Error(
        'Failed to get live status. check the channel id or network status.',
      );
    }

    return response.data;
  }
}
