import { Resolver, Query, Args } from '@nestjs/graphql';
import { QrCodeService } from './qr-code.service';
import { QrCode } from './entities/qr-code.entity';

@Resolver('QrCode')
export class QrCodeResolver {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Query(() => QrCode)
  async generateQrCode(@Args('data') data: string) {
    const qrCodeDataURL = await this.qrCodeService.generateQrCode(data);
    return {
      dataUrl: qrCodeDataURL,
    };
  }
}
