import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { MyLambdaStack } from "./lambda-stack";

export class MyPipelineAppStage extends cdk.Stage {
  constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
    super(scope, stageName, props);

    new MyLambdaStack(this, "LambdaStack", stageName);
  }
}
