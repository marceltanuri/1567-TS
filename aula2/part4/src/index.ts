interface User {
  id: number;
  name: string;
  email: string;
}

class UserApp {
  private readonly apiUrl = 'http://localhost:3000';
  private userList: HTMLUListElement;
  private addUserForm: HTMLFormElement;
  private nameInput: HTMLInputElement;
  private emailInput: HTMLInputElement;

  constructor() {
    this.userList = document.getElementById('userList') as HTMLUListElement;
    this.addUserForm = document.getElementById('addUserForm') as HTMLFormElement;
    this.nameInput = document.getElementById('name') as HTMLInputElement;
    this.emailInput = document.getElementById('email') as HTMLInputElement;
  }

  public init(): void {
    this.addUserForm.addEventListener('submit', this.handleUserAdd.bind(this));
    this.fetchAndRenderUsers();
  }

  private async fetchAndRenderUsers(): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/users`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users: User[] = await response.json();
      this.renderUsers(users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  }

  private renderUsers(users: User[]): void {
    this.userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
      this.userList.appendChild(li);
    });
  }

  private async handleUserAdd(event: Event): Promise<void> {
    event.preventDefault();
    const name = this.nameInput.value;
    const email = this.emailInput.value;

    if (!name || !email) {
      alert('Name and email are required');
      return;
    }

    try {
      const response = await fetch(`${this.apiUrl}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      this.nameInput.value = '';
      this.emailInput.value = '';
      this.fetchAndRenderUsers();

    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}

// Wait for the DOM to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', () => {
  const app = new UserApp();
  app.init();
});
