const { BedrockRuntimeClient, InvokeModelCommand } = require("@aws-sdk/client-bedrock-runtime");

const client = new BedrockRuntimeClient({ region: "us-east-1" });

exports.handler = async (event) => {
    const { message, tone } = JSON.parse(event.body);
    
    const prompt = `Rewrite this message in a ${tone} tone: "${message}"`;
    
    const command = new InvokeModelCommand({
        modelId: "anthropic.claude-3-haiku-20240307-v1:0",
        body: JSON.stringify({
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 300,
            messages: [{ role: "user", content: prompt }]
        })
    });
    
    const response = await client.send(command);
    const result = JSON.parse(new TextDecoder().decode(response.body));
    
    return {
        statusCode: 200,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ rewrittenText: result.content[0].text })
    };
};

