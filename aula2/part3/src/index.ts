import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getUsers(): Promise<User[]> {
    try {
      const response = await axios.get<User[]>(`${this.baseUrl}/users`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  public async createUser(name: string, email: string): Promise<User | null> {
    try {
      const response = await axios.post<User>(`${this.baseUrl}/users`, { name, email });
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  }
}

const main = async () => {
  const client = new ApiClient('http://localhost:3000');

  console.log('Creating a new user...');
  const newUser = await client.createUser('Jane Doe', 'jane.doe@example.com');
  if (newUser) {
    console.log('User created:', newUser);
  }

  console.log('Fetching all users...');
  const users = await client.getUsers();
  console.log('Users:', users);
};

main();
