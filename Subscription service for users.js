const subscriptionService = {
  users: [],

  registerUser(name, email, subscriptionType) {
    if (!name || !email || !subscriptionType) {
      console.log("All fields are required!");
      return;
    }
    if (!this.isValidEmail(email)) {
      console.log("Invalid email address!");
      return;
    }

    const user = {
      id: this.users.length + 1,
      name: name,
      email: email,
      subscriptionType: subscriptionType,
      date: new Date().toISOString()
    };
    this.users.push(user);
    console.log(`User registered successfully! Welcome, ${name}.`);
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  listSubscribers() {
    console.log("Registered Users:");
    this.users.forEach((user) => {
      console.log(
        `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Subscription: ${user.subscriptionType}, Date: ${user.date}`
      );
    });
  }
};

subscriptionService.registerUser("Alice", "alice@example.com", "Premium");

subscriptionService.registerUser("Bob", "bob@example", "Basic"); // Invalid email
subscriptionService.registerUser("Charlie", "charlie@example.com", "Basic");

subscriptionService.listSubscribers();
