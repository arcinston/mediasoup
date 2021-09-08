import os from "os";
import { RtpCodecCapability } from "mediasoup/";

export const config = {
  listenIp: "0.0.0.0",
  listenPort: 8080,

  mediasoup: {
    numWorkers: Object.keys(os.cpus()).length,
    worker: {
      rtcMinPort: 10000,
      rtcMaxPort: 10100,
      logLevel: "debug",
      logTags: [
        "info",
        "ice",
        "dtls",
        "rtp",
        "srtp",
        "rtcp",
        "rtx",
        "bwe",
        "score",
        "simulcast",
        "svc",
        "audio",
        "video",
        "data",
      ] as WorkerLogTag[],
    },
    router: {
      medieaCodecs: [
        {
          kind: "video",
          mimeType: "video/vp8",
          clockRate: 90000,
          channels: 1,
        },
        {
          kind: "audio",
          mimeType: "audio/opus",
          clockRate: 48000,
        },
      ] as RTCRtpCodecCapability[],
    },
    //webRTC transport settings
    webRTCTransport: {
      listenIps: [
        {
          ip: "0.0.0.0",
          announcedIp: "127.0.0.1", //replace by public ip later
        },
      ] as TransportListenIp[],
    },
  },
} as const;
