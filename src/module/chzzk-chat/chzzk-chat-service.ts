import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ChzzkApiService } from '../chzzk-api';
import { ChzzkApiLiveStatusResponse } from '../chzzk-api';

@Injectable()
export class ChzzkChatService {
  constructor(private readonly chzzkApiService: ChzzkApiService) {}

  async getChatRoomId(toGetChannelId: string): Promise<string> {
    const liveStatus: ChzzkApiLiveStatusResponse =
      await this.chzzkApiService.getLiveStatus(toGetChannelId);

    return liveStatus.content.chatChannelId;
  }

  async authenticateChatRoom(chatRoomId: string) {
    const url: string = `https://comm-api.game.naver.com/nng_main/v1/chats/access-token?channelId=${chatRoomId}&chatType=STREAMING`;
    const header: AxiosRequestConfig = {
      headers: {
        Cookie: `AUTH_AUT=${process.env.CHZZK_AUTH_AUT}; AUTH_SES=${process.env.CHZZK_AUTH_SES}`,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Content-Type': 'application/json',
      },
    };

    const response: AxiosResponse<any> = await axios.get(url, header);

    return response.data;
  }
}
