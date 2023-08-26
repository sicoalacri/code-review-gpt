import { StringParameter } from "aws-cdk-lib/aws-ssm";
import { Construct } from "constructs";
import { getStage } from "./env-helpers";

export const getCertificateArn = (
  scope: Construct,
  subDomain: string
): string | undefined => {
  const stage = getStage();
  return (
    StringParameter.fromStringParameterAttributes(
      scope,
      `CertificateArnParameter-${subDomain}-${stage}`,
      {
        parameterName: `${subDomain.toUpperCase()}_${stage.toUpperCase()}_CERTIFICATE_ARN`,
      }
    ).stringValue ?? undefined
  );
};
