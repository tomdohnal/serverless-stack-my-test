export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "serverless-stack-my-test"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://98es8xkzf3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bKyKGiT7F",
    APP_CLIENT_ID: "4gtibk8aqvngcspfiik7f4t50g",
    IDENTITY_POOL_ID: "us-east-1:ef931d58-ccb8-4f53-95c5-6e72269eda9f"
  }
};
