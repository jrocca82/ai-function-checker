// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const prompt = `Give me a random coding language. Do not include ${req.body.primaryLanguage} as a result. Give your answer as just the name of the coding language.`;

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.7,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default handler;