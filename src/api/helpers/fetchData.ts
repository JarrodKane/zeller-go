import awsconfig from '../aws/config.js';
import { ListZellerCustomers } from '../graphql/getCustomers.gql';

export type UserData = {
  email: string;
  id: string;
  name: string;
  role: 'ADMIN' | 'MANAGER'; // Assuming 'role' can only be 'ADMIN' or 'MANAGER'
};

export const fetchZellaData = async (): Promise<UserData[] | undefined> => {
  const query = ListZellerCustomers;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': awsconfig.aws_appsync_apiKey,
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  try {
    const response = await fetch(
      awsconfig.aws_appsync_graphqlEndpoint,
      requestOptions
    );
    const data = await response.json();
    return data.data.listZellerCustomers.items;
  } catch (error) {
    console.error('Error:', error);
  }
};
