import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "ap-northeast-1": {
    hostname: "oidc.ap-northeast-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ap-northeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-1",
  },
  "ap-northeast-2": {
    hostname: "oidc.ap-northeast-2.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ap-northeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-northeast-2",
  },
  "ap-south-1": {
    hostname: "oidc.ap-south-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ap-south-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-south-1",
  },
  "ap-southeast-1": {
    hostname: "oidc.ap-southeast-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ap-southeast-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-1",
  },
  "ap-southeast-2": {
    hostname: "oidc.ap-southeast-2.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ap-southeast-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ap-southeast-2",
  },
  "ca-central-1": {
    hostname: "oidc.ca-central-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.ca-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "ca-central-1",
  },
  "eu-central-1": {
    hostname: "oidc.eu-central-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.eu-central-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-central-1",
  },
  "eu-north-1": {
    hostname: "oidc.eu-north-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.eu-north-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-north-1",
  },
  "eu-west-1": {
    hostname: "oidc.eu-west-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.eu-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-1",
  },
  "eu-west-2": {
    hostname: "oidc.eu-west-2.amazonaws.com",
    variants: [
      {
        hostname: "oidc.eu-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-2",
  },
  "eu-west-3": {
    hostname: "oidc.eu-west-3.amazonaws.com",
    variants: [
      {
        hostname: "oidc.eu-west-3.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "eu-west-3",
  },
  "sa-east-1": {
    hostname: "oidc.sa-east-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.sa-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "sa-east-1",
  },
  "us-east-1": {
    hostname: "oidc.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
  },
  "us-east-2": {
    hostname: "oidc.us-east-2.amazonaws.com",
    variants: [
      {
        hostname: "oidc.us-east-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-2",
  },
  "us-gov-west-1": {
    hostname: "oidc.us-gov-west-1.amazonaws.com",
    variants: [
      {
        hostname: "oidc.us-gov-west-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-gov-west-1",
  },
  "us-west-2": {
    hostname: "oidc.us-west-2.amazonaws.com",
    variants: [
      {
        hostname: "oidc.us-west-2.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-west-2",
  },
};

const partitionHash: PartitionHash = {
  aws: {
    regions: [
      "af-south-1",
      "ap-east-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-northeast-3",
      "ap-south-1",
      "ap-southeast-1",
      "ap-southeast-2",
      "ca-central-1",
      "eu-central-1",
      "eu-north-1",
      "eu-south-1",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "me-south-1",
      "sa-east-1",
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
    ],
    regionRegex: "^(us|eu|ap|sa|ca|me|af)\\-\\w+\\-\\d+$",
    hostname: "oidc.{region}.amazonaws.com",
    variants: [
      {
        hostname: "oidc.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "oidc-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "oidc-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "oidc.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-cn": {
    regions: ["cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "oidc.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "oidc.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "oidc-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "oidc-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "oidc.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "oidc.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "oidc.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "oidc.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "oidc.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "oidc.{region}.amazonaws.com",
    variants: [
      {
        hostname: "oidc.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "oidc-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "oidc-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "oidc.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
  },
};

export const defaultRegionInfoProvider: RegionInfoProvider = async (
  region: string,
  options?: RegionInfoProviderOptions
) =>
  getRegionInfo(region, {
    ...options,
    signingService: "awsssooidc",
    regionHash,
    partitionHash,
  });
