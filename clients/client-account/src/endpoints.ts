import { getRegionInfo, PartitionHash, RegionHash } from "@aws-sdk/config-resolver";
import { RegionInfoProvider, RegionInfoProviderOptions } from "@aws-sdk/types";

const regionHash: RegionHash = {
  "aws-cn-global": {
    hostname: "account.cn-northwest-1.amazonaws.com.cn",
    variants: [
      {
        hostname: "account.cn-northwest-1.amazonaws.com.cn",
        tags: [],
      },
    ],
    signingRegion: "cn-northwest-1",
  },
  "aws-global": {
    hostname: "account.us-east-1.amazonaws.com",
    variants: [
      {
        hostname: "account.us-east-1.amazonaws.com",
        tags: [],
      },
    ],
    signingRegion: "us-east-1",
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
      "aws-global",
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
    hostname: "account.{region}.amazonaws.com",
    variants: [
      {
        hostname: "account.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "account-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "account-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "account.{region}.api.aws",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-global",
  },
  "aws-cn": {
    regions: ["aws-cn-global", "cn-north-1", "cn-northwest-1"],
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    hostname: "account.{region}.amazonaws.com.cn",
    variants: [
      {
        hostname: "account.{region}.amazonaws.com.cn",
        tags: [],
      },
      {
        hostname: "account-fips.{region}.amazonaws.com.cn",
        tags: ["fips"],
      },
      {
        hostname: "account-fips.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "account.{region}.api.amazonwebservices.com.cn",
        tags: ["dualstack"],
      },
    ],
    endpoint: "aws-cn-global",
  },
  "aws-iso": {
    regions: ["us-iso-east-1", "us-iso-west-1"],
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    hostname: "account.{region}.c2s.ic.gov",
    variants: [
      {
        hostname: "account.{region}.c2s.ic.gov",
        tags: [],
      },
    ],
  },
  "aws-iso-b": {
    regions: ["us-isob-east-1"],
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    hostname: "account.{region}.sc2s.sgov.gov",
    variants: [
      {
        hostname: "account.{region}.sc2s.sgov.gov",
        tags: [],
      },
    ],
  },
  "aws-us-gov": {
    regions: ["us-gov-east-1", "us-gov-west-1"],
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    hostname: "account.{region}.amazonaws.com",
    variants: [
      {
        hostname: "account.{region}.amazonaws.com",
        tags: [],
      },
      {
        hostname: "account-fips.{region}.amazonaws.com",
        tags: ["fips"],
      },
      {
        hostname: "account-fips.{region}.api.aws",
        tags: ["dualstack", "fips"],
      },
      {
        hostname: "account.{region}.api.aws",
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
    signingService: "account",
    regionHash,
    partitionHash,
  });
