import type { NextApiRequest, NextApiResponse } from 'next';

export default function code(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.REDIRECT_URI) {
    throw new Error('REDIRECT_URL env variable is not set');
  }

  const redirectToAccessTokens = process.env.REDIRECT_URI;

  const { query } = req;
  console.log("🔥 ~ file: code.ts:9 ~ code ~ query:", query)

  const redirectUrl = redirectToAccessTokens + '?' +
    new URLSearchParams({
      code: query.code?.toString() ?? 'code', // Use this code to generate access token
      state: query?.state?.toString() ?? 'null' // use this for state unique id
    });

  res.redirect(redirectUrl);
}
