export async function GET(request: Request, response: Response) {
  if (response.status === 200) console.log(response.json());
}
